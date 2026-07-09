import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
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
      <body className="bg-warm-ivory text-text">
        <div className="mx-auto max-w-[var(--container)] w-full px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  )
}
