import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getVisiblePackages } from '@/app/lib/packages'
import { Container } from '@/components/layout/Container'
import RegistrationFormClient from './RegistrationFormClient'

export const metadata: Metadata = {
  title: 'Pendaftaran Umrah Bone - Mazaya Travel',
  description:
    'Isi formulir pendaftaran Umrah Mazaya Travel dengan alur yang lebih rapi. Pilih paket, lengkapi data jemaah, lalu tunggu tindak lanjut via WhatsApp.',
}

interface Props {
  searchParams: Promise<{ package?: string }>
}

export default async function RegisterPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  const selectedSlug = resolvedSearchParams.package

  if (selectedSlug) {
    redirect(`/daftar/${selectedSlug}`)
  }

  const allPackages = await getVisiblePackages()
  const initialPackage = allPackages.find((pkg) => pkg.slug === selectedSlug)

  return (
    <Container className="pb-12 pt-4 md:pt-6">
      <RegistrationFormClient
        allPackages={allPackages.map((p) => ({
          id: p.id,
          title: p.title,
          slug: p.slug,
          price: p.price,
          priceMode: p.priceMode,
          departureDate: p.departureDate,
        }))}
        initialPackageId={initialPackage?.id || null}
      />
    </Container>
  )
}
