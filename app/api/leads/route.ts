import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { leads } from '@/db/schema'
import { notifyNewLead } from '@/app/lib/lead-notification'

type LeadRequestBody = {
  leadType?: 'consultation' | 'registration'
  packageId?: string | number | null
  fullName?: string
  phone?: string
  city?: string | null
  message?: string | null
  sourcePage?: string | null
  sourceCampaign?: string | null
  website?: string
  privacyConsentGiven?: boolean
}

const attempts = new Map<string, number[]>()
const windowMs = 10 * 60 * 1000
const maxAttempts = 5

function limited(ip: string) {
  const now = Date.now()
  const recent = (attempts.get(ip) || []).filter((time) => now - time < windowMs)
  recent.push(now)
  attempts.set(ip, recent)
  return recent.length > maxAttempts
}

export async function POST(req: NextRequest) {
  let body: LeadRequestBody
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Data formulir tidak valid' }, { status: 400 })
  }

  if (body.website) return new NextResponse(null, { status: 204 })

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (limited(ip)) {
    return NextResponse.json({ error: 'Terlalu banyak pengiriman. Silakan tunggu beberapa menit.' }, { status: 429 })
  }

  const fullName = body.fullName?.trim()
  const phone = body.phone?.replace(/[\s-]/g, '')
  const city = body.city?.trim() || null
  const message = body.message?.trim() || null
  const leadType = body.leadType === 'consultation' ? 'consultation' : 'registration'
  const packageId = body.packageId ? Number(body.packageId) : null

  if (!fullName || !phone) return NextResponse.json({ error: 'Nama lengkap dan nomor WhatsApp wajib diisi.' }, { status: 400 })
  if (fullName.length > 255 || (city?.length ?? 0) > 100 || (message?.length ?? 0) > 255) return NextResponse.json({ error: 'Data formulir terlalu panjang.' }, { status: 400 })
  if (!/^\+?\d{10,15}$/.test(phone)) return NextResponse.json({ error: 'Nomor WhatsApp tidak valid.' }, { status: 400 })
  if (leadType === 'registration' && !Number.isInteger(packageId)) return NextResponse.json({ error: 'Pilih paket keberangkatan terlebih dulu.' }, { status: 400 })
  if (!body.privacyConsentGiven) return NextResponse.json({ error: 'Persetujuan kebijakan privasi wajib disetujui.' }, { status: 400 })

  try {
    const [lead] = await db.insert(leads).values({
      leadType,
      packageId: packageId ? String(packageId) : null,
      fullName,
      phone,
      city,
      message,
      sourcePage: body.sourcePage?.slice(0, 255) || null,
      sourceCampaign: body.sourceCampaign?.slice(0, 255) || null,
      privacyConsentGiven: true,
      privacyConsentAt: new Date(),
      submittedAt: new Date(),
    }).returning({ id: leads.id, status: leads.status })

    void notifyNewLead({
      id: lead.id,
      leadType,
      fullName,
      phone,
      city,
      message,
      packageId: packageId ? String(packageId) : null,
      sourcePage: body.sourcePage?.slice(0, 255) || null,
      sourceCampaign: body.sourceCampaign?.slice(0, 255) || null,
    })

    return NextResponse.json({ success: true, lead }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Data belum dapat disimpan. Silakan coba lagi atau hubungi Mazaya melalui WhatsApp.' }, { status: 503 })
  }
}
