import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { PublicFooter } from '@/components/layout/PublicFooter'
import { PublicNavbar } from '@/components/layout/PublicNavbar'
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA'
import '../globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: 'Mazaya Travel | Paket Umrah, Legalitas, dan Pendaftaran Awal',
  description:
    'Mazaya Travel membantu calon jemaah melihat paket Umrah, memeriksa legalitas, memahami dokumen, dan memulai pendaftaran awal dengan jalur konsultasi yang jelas.',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={plusJakartaSans.variable} data-scroll-behavior="smooth">
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
