'use client'

import { useEffect } from 'react'
import { Container } from '@/components/layout/Container'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

export default function SiteError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => console.error(error), [error])

  return (
    <Container className="py-10 md:py-16">
      <SectionShell surface="card" className="mx-auto max-w-2xl px-6 py-10 text-center md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Gangguan sementara</p>
        <h1 className="mt-4 text-3xl font-bold text-text">Halaman ini belum bisa dimuat dengan baik.</h1>
        <p className="mt-4 text-base leading-8 text-muted">Silakan coba lagi. Bila masih berulang, hubungi Mazaya melalui WhatsApp agar tim dapat membantu.</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="inline-flex min-h-12 items-center justify-center rounded-[12px] bg-primary px-5 font-semibold text-white">Coba lagi</button>
          <Button href="/" variant="secondary">Kembali ke beranda</Button>
        </div>
      </SectionShell>
    </Container>
  )
}
