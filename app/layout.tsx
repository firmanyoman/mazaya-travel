import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { PublicFooter } from '@/components/layout/PublicFooter'
import { PublicNavbar } from '@/components/layout/PublicNavbar'
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: 'Mazaya Travel | Travel Umrah Resmi dan Terpercaya di Bone',
  description:
    'Mazaya Travel membantu calon jemaah Bone dan sekitarnya memilih paket Umrah dengan informasi yang jelas, legalitas yang terbuka, dan jalur daftar yang menenangkan.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body className="bg-warm-ivory text-text antialiased">
        <a href="#main-content" className="skip-link">Lewati ke konten utama</a>
        <div className="min-h-screen bg-warm-ivory">
          <PublicNavbar />
          <main id="main-content">{children}</main>
          <PublicFooter />
          <StickyMobileCTA />
        </div>
      </body>
    </html>
  )
}
