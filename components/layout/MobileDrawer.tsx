'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const links = [
  { href: '/', label: 'Beranda' },
  { href: '/paket-umrah', label: 'Paket Umrah' },
  { href: '/artikel', label: 'Artikel' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/kontak', label: 'Kontak' },
]

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <div className={open ? 'pointer-events-auto' : 'pointer-events-none'} aria-hidden={!open}>
      <button
        type="button"
        aria-label="Tutup menu"
        onClick={onClose}
        className={open ? 'fixed inset-0 z-40 bg-[rgba(18,52,52,0.42)] backdrop-blur-[2px]' : 'hidden'}
      />
      <aside className={[
        'fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-surface shadow-[var(--shadow-3)] transition-transform duration-150',
        open ? 'translate-x-0' : 'translate-x-full',
      ].join(' ')}>
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="text-sm font-semibold text-text">Navigasi</span>
          <button type="button" onClick={onClose} className="focus-ring rounded-full p-2 text-text">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="focus-ring rounded-[12px] px-4 py-3 text-base font-semibold text-text transition-colors hover:bg-primary-soft/50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-border px-5 py-5">
          <Button
            href="https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi"
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
          >
            Konsultasi WhatsApp
          </Button>
        </div>
      </aside>
    </div>
  )
}
