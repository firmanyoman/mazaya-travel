import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { leads } from '@/db/schema'

type LeadRequestBody = {
  leadType?: string
  packageId?: string | number | null
  fullName?: string
  phone?: string
  nik?: string | null
  fatherName?: string | null
  city?: string | null
  gender?: string | null
  birthDate?: string | null
  message?: string | null
  ktpFile?: string | null
  privacyConsentGiven?: boolean
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadRequestBody = await req.json()
    const {
      leadType,
      packageId,
      fullName,
      phone,
      nik,
      fatherName,
      city,
      gender,
      birthDate,
      message,
      ktpFile,
      privacyConsentGiven,
    } = body

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Nama Lengkap dan No. WhatsApp wajib diisi' },
        { status: 400 }
      )
    }

    if (!/^\+?\d{10,15}$/.test(phone.replace(/[\s-]/g, ''))) {
      return NextResponse.json(
        { error: 'Nomor WhatsApp tidak valid' },
        { status: 400 }
      )
    }

    if (leadType === 'registration' && (!packageId || !nik || !fatherName || !city || !birthDate || !gender || !ktpFile)) {
      return NextResponse.json(
        { error: 'Semua field wajib pendaftaran harus diisi, termasuk upload KTP' },
        { status: 400 }
      )
    }

    if (leadType === 'registration' && !/^\d{16}$/.test((nik || '').trim())) {
      return NextResponse.json(
        { error: 'NIK harus terdiri dari 16 digit' },
        { status: 400 }
      )
    }

    if (leadType === 'registration') {
      try {
        const parsedKtpFile = JSON.parse(ktpFile || '{}') as {
          type?: string
          size?: number
        }

        const allowedKtpTypes = ['image/jpeg', 'image/png', 'application/pdf']
        const maxKtpFileSize = 2 * 1024 * 1024

        if (
          !parsedKtpFile.type ||
          !allowedKtpTypes.includes(parsedKtpFile.type) ||
          typeof parsedKtpFile.size !== 'number' ||
          parsedKtpFile.size > maxKtpFileSize
        ) {
          return NextResponse.json(
            { error: 'File KTP harus berupa JPG, PNG, atau PDF dengan ukuran maksimal 2 MB' },
            { status: 400 }
          )
        }
      } catch {
        return NextResponse.json(
          { error: 'Data upload KTP tidak valid' },
          { status: 400 }
        )
      }
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
      packageId:
        typeof packageId === 'number'
          ? packageId
          : packageId
            ? parseInt(packageId, 10)
            : null,
      fullName,
      phone,
      nik: nik || null,
      fatherName: fatherName || null,
      city: city || null,
      gender: gender || null,
      birthDate: birthDate || null,
      message: message || null,
      ktpFile: ktpFile || null,
      privacyConsentGiven: true,
      privacyConsentAt: new Date(),
      submittedAt: new Date(),
      status: 'baru',
    }).returning()

    return NextResponse.json({ success: true, lead: newLead[0] })
  } catch (error: unknown) {
    console.error('Error inserting lead:', error)
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Terjadi kesalahan pada server',
      },
      { status: 500 }
    )
  }
}
