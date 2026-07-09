import Link from 'next/link'
import { Logo } from '@/components/brand/Logo'
import { Container } from './Container'

const footerGroups = [
  {
    title: 'Navigasi',
    links: [
      { href: '/', label: 'Beranda' },
      { href: '/paket-umrah', label: 'Paket Umrah' },
      { href: '/tentang-kami', label: 'Tentang Kami' },
      { href: '/kontak', label: 'Kontak' },
    ],
  },
  {
    title: 'Bantuan',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/legalitas', label: 'Legalitas' },
      { href: '/kebijakan-privasi', label: 'Kebijakan Privasi' },
      { href: '/syarat-ketentuan', label: 'Syarat & Ketentuan' },
    ],
  },
]

export function PublicFooter() {
  return (
    <footer className="mt-16 border-t border-primary/10 bg-primary text-white">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div className="space-y-4">
          <Logo variant="reversed" height={56} />
          <p className="max-w-md text-sm leading-7 text-white/76">
            PT Mazaya Amanah Wisata melayani perjalanan Umrah dengan informasi yang jelas, jalur konsultasi yang tenang, dan pendampingan yang lebih mudah dipahami keluarga.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title} className="space-y-4">
            <h2 className="text-sm font-semibold tracking-[0.01em] text-white">{group.title}</h2>
            <ul className="space-y-3 text-sm text-white/76">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring rounded-[var(--radius-sm)] transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold tracking-[0.01em] text-white">Kantor & legalitas</h2>
          <div className="space-y-3 text-sm leading-7 text-white/76">
            <p>Jl. Lapawawoi Kr. Sigeri, Kel. Biru, Kec. Tanete Riattang, Bone, Sulawesi Selatan</p>
            <p>WhatsApp: 0852 9875 1997</p>
            <p>NIB: 13052200161160002</p>
          </div>
        </div>
      </Container>
      <Container className="border-t border-white/10 py-4 pb-24 text-xs text-white/58 md:pb-4">
        © 2026 PT Mazaya Amanah Wisata. Hak Cipta Dilindungi.
      </Container>
    </footer>
  )
}
