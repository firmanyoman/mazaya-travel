import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { db } from '@/db'
import RegistrationFormClient from '../RegistrationFormClient'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function RegisterPackagePage({ params }: Props) {
  const { slug } = await params

  const allPackages = await db.query.packages.findMany({
    where: (pkgs, { or, eq }) =>
      or(eq(pkgs.packageStatus, 'active'), eq(pkgs.packageStatus, 'sold_out')),
    orderBy: (pkgs, { asc }) => [asc(pkgs.departureDate)],
  })

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