import { Container } from '@/components/layout/Container'
import { SectionShell } from '@/components/layout/SectionShell'

export default function SiteLoading() {
  return (
    <Container className="py-10 md:py-16" aria-busy="true" aria-live="polite">
      <SectionShell surface="card" className="mx-auto max-w-4xl px-6 py-10 md:px-10">
        <p className="text-sm font-semibold text-primary">Memuat informasi Mazaya Travel…</p>
        <div className="mt-6 grid gap-4">
          <div className="h-10 animate-pulse rounded-[12px] bg-surface-subtle" />
          <div className="h-5 animate-pulse rounded-[12px] bg-surface-subtle" />
          <div className="h-5 w-4/5 animate-pulse rounded-[12px] bg-surface-subtle" />
        </div>
      </SectionShell>
    </Container>
  )
}
