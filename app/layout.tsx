import type { Metadata } from 'next'
import { siteUrl } from '@/app/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
