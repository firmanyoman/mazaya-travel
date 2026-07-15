import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getVisiblePackages } from '@/app/lib/packages'
import { Container } from '@/components/layout/Container'
import RegistrationFormClient from '../RegistrationFormClient'

interface MetadataProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug } = await params
  const allPackages = await getVisiblePackages()
  const selectedPackage = allPackages.find((pkg) => pkg.slug === slug)

  if (!selectedPackage) {
    return {
      title: 'Pendaftaran Paket Tidak Ditemukan - Mazaya Travel',
    }
  }

  return {
    title: `Daftar ${selectedPackage.title} - Mazaya Travel`,
    description:
      `Lengkapi formulir pendaftaran untuk ${selectedPackage.title}. Tim Mazaya akan meninjau data awal dan menghubungi Anda lewat WhatsApp sesuai paket yang dipilih.`,
    robots: { index: false, follow: false },
  }
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function RegisterPackagePage({ params }: Props) {
  const { slug } = await params

  const allPackages = await getVisiblePackages()
  const initialPackage = allPackages.find((pkg) => pkg.slug === slug)

  if (!initialPackage) {
    notFound()
  }

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
        initialPackageId={initialPackage.id}
      />
    </Container>
  )
}