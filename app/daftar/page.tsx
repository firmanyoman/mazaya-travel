import { redirect } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { db } from '@/db'
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

  // Fetch all active/sold_out packages for selection dropdown
  const allPackages = await db.query.packages.findMany({
    where: (pkgs, { or, eq }) =>
      or(eq(pkgs.packageStatus, 'active'), eq(pkgs.packageStatus, 'sold_out')),
    orderBy: (pkgs, { asc }) => [asc(pkgs.departureDate)],
  })

  // Find initial package from slug query parameter
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
