import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Halaman tidak ditemukan',
}

export default function Page() {
  notFound()
}
