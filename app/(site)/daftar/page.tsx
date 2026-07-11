import { redirect } from 'next/navigation'
import { getVisiblePackages } from '@/app/lib/packages'
import { Container } from '@/components/layout/Container'
import RegistrationFormClient from './RegistrationFormClient'

interface Props {
  searchParams: Promise<{ package?: string }>
}

export default async function RegisterPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  const selectedSlug = resolvedSearchParams.package

  if (selectedSlug) {
    redirect(`/daftar/${selectedSlug}`)
  }

  const allPackages = getVisiblePackages().sort((a, b) => a.departureDate.localeCompare(b.departureDate))
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
