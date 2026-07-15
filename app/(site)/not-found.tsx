import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

export default function SiteNotFound() {
  return (
    <Container className="py-10 md:py-16">
      <SectionShell surface="card" className="mx-auto max-w-2xl px-6 py-10 text-center md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Halaman tidak ditemukan</p>
        <h1 className="mt-4 text-3xl font-bold text-text">Link ini mungkin sudah berubah atau paketnya tidak lagi tersedia.</h1>
        <p className="mt-4 text-base leading-8 text-muted">Kembali ke daftar paket untuk melihat jadwal yang masih aktif, atau hubungi Mazaya bila ingin dibantu mencari pilihan lain.</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/paket-umrah">Lihat paket Umrah</Button>
          <Button href="/" variant="secondary">Kembali ke beranda</Button>
        </div>
      </SectionShell>
    </Container>
  )
}
