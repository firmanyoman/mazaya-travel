'use client'

import { usePathname } from 'next/navigation'
import { PublicFooter } from '@/components/layout/PublicFooter'
import { PublicNavbar } from '@/components/layout/PublicNavbar'
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA'

export function ConditionalPublicChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <PublicNavbar />
      <main id="main-content">{children}</main>
      <PublicFooter />
      <StickyMobileCTA />
    </>
  )
}
