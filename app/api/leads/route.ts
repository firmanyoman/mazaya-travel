import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { leads } from '@/db/schema'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      leadType,
      packageId,
      fullName,
      phone,
      nik,
      gender,
      birthDate,
      message,
      privacyConsentGiven,
    } = body

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Nama Lengkap dan No. WhatsApp wajib diisi' },
        { status: 400 }
      )
    }

    if (leadType === 'registration' && !packageId) {
      return NextResponse.json(
        { error: 'Paket perjalanan harus dipilih untuk pendaftaran' },
        { status: 400 }
      )
    }

    if (!privacyConsentGiven) {
      return NextResponse.json(
        { error: 'Persetujuan kebijakan privasi wajib disetujui' },
        { status: 400 }
      )
    }

    const newLead = await db.insert(leads).values({
      leadType: leadType || 'registration',
      packageId: packageId ? parseInt(packageId, 10) : null,
      fullName,
      phone,
      nik: nik || null,
      gender: gender || null,
      birthDate: birthDate || null,
      message: message || null,
      privacyConsentGiven: true,
      privacyConsentAt: new Date(),
      submittedAt: new Date(),
      status: 'baru',
    }).returning()

    return NextResponse.json({ success: true, lead: newLead[0] })
  } catch (error: any) {
    console.error('Error inserting lead:', error)
    return NextResponse.json(
      { error: error?.message || 'Terjadi kesalahan pada server' },
      { status: 500 }
    )
  }
}
