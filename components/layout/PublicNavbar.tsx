'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/Button'
import { Container } from './Container'
import { MobileDrawer } from './MobileDrawer'

const links = [
  { href: '/', label: 'Beranda' },
  { href: '/paket-umrah', label: 'Paket Umrah' },
  { href: '/artikel', label: 'Artikel' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/kontak', label: 'Kontak' },
]

export function PublicNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-border/80 bg-surface/92 backdrop-blur-md">
        <Container className="flex min-h-16 items-center justify-between gap-4 py-2.5">
          <Logo priority />
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-text transition-colors hover:bg-primary-soft/50 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button
              href="https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              Konsultasi Gratis
            </Button>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label="Buka menu navigasi"
            onClick={() => setOpen(true)}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text md:hidden"
          >
            ☰
          </button>
        </Container>
      </header>
      <div id="mobile-drawer">
        <MobileDrawer open={open} onClose={() => setOpen(false)} />
      </div>
    </>
  )
}
