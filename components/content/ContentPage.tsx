import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

interface ContentHeroMetric {
  label: string
  value: string
}

interface ContentHeroPanelItem {
  label: string
  value: string
}

interface ContentPageLayoutProps {
  children: React.ReactNode
}

interface ContentHeroProps {
  eyebrow: string
  title: string
  summary: string
  backHref?: string
  backLabel?: string
  actions?: React.ReactNode
  metrics?: ContentHeroMetric[]
  panelTitle: string
  panelItems: ContentHeroPanelItem[]
}

interface ContentSectionProps {
  eyebrow?: string
  title: string
  summary?: string
  children: React.ReactNode
}

interface ContentCtaProps {
  eyebrow: string
  title: string
  summary: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
  secondaryExternal?: boolean
}

export function ContentPageLayout({ children }: ContentPageLayoutProps) {
  return <Container className="pb-12 pt-4 md:pt-6"><div className="flex flex-col gap-4 md:gap-6">{children}</div></Container>
}

export function ContentHero({
  eyebrow,
  title,
  summary,
  backHref,
  backLabel,
  actions,
  metrics = [],
  panelTitle,
  panelItems,
}: ContentHeroProps) {
  return (
    <SectionShell surface="card" className="relative overflow-hidden px-6 py-8 md:px-8 lg:px-12 lg:py-12">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(97,199,195,0.22),transparent_56%)]" />
      <div className="absolute right-8 top-8 hidden h-16 w-16 rounded-full bg-brand-yellow/20 blur-2xl lg:block" />
      <div className="relative grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
        <div className="space-y-5">
          {backHref && backLabel ? (
            <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover">
              <span aria-hidden="true">←</span>
              {backLabel}
            </Link>
          ) : null}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-primary-soft px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-[56px] lg:leading-[1.14]">
              {title}
            </h1>
            <p className="max-w-2xl text-[17px] leading-8 text-muted lg:text-lg">{summary}</p>
          </div>
          {actions ? <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div> : null}
          {metrics.length > 0 ? (
            <div className="grid gap-3 border-t border-border pt-6 sm:grid-cols-2 xl:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-[16px] bg-surface-subtle px-4 py-4">
                  <div className="text-2xl font-bold text-primary">{item.value}</div>
                  <div className="text-sm leading-7 text-muted">{item.label}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="grid gap-4">
          <div className="rounded-[20px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
            <div className="text-sm font-semibold uppercase tracking-[0.12em] text-white/72">{panelTitle}</div>
            <div className="mt-5 grid gap-3">
              {panelItems.map((item) => (
                <div key={item.label} className="rounded-[16px] border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-sm">
                  <div className="text-sm text-white/70">{item.label}</div>
                  <div className="mt-1 text-base font-semibold leading-7 text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[20px] border border-border bg-surface-subtle p-6 shadow-[var(--shadow-1)]">
            <div className="text-sm font-semibold text-text-secondary">Cara memakai halaman ini</div>
            <p className="mt-3 text-sm leading-7 text-muted">
              Disusun agar pengunjung bisa membaca dulu dengan tenang, lalu memilih langkah lanjut yang paling relevan.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

export function ContentSection({ eyebrow, title, summary, children }: ContentSectionProps) {
  return (
    <SectionShell className="px-1">
      <div className="space-y-6">
        <div className="space-y-3">
          {eyebrow ? (
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {eyebrow}
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            </div>
          ) : null}
          <div className="space-y-3">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-text sm:text-4xl">{title}</h2>
            {summary ? <p className="max-w-3xl text-base leading-8 text-muted">{summary}</p> : null}
          </div>
        </div>
        {children}
      </div>
    </SectionShell>
  )
}

export function ContentCta({ eyebrow, title, summary, primaryHref, primaryLabel, secondaryHref, secondaryLabel, secondaryExternal = false }: ContentCtaProps) {
  return (
    <SectionShell surface="primary" className="relative overflow-hidden px-6 py-8 md:px-8 lg:px-12 lg:py-10">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(240,235,32,0.18),transparent_62%)] lg:block" />
      <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
            {eyebrow}
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
          </div>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
          <p className="max-w-2xl text-base leading-8 text-white/76">{summary}</p>
        </div>
        <div className="grid gap-3 rounded-[20px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
          <Button href={primaryHref} variant="secondary" size="lg" className="border-white bg-white text-primary hover:bg-white/92" target={primaryHref.startsWith('http') ? '_blank' : undefined} rel={primaryHref.startsWith('http') ? 'noopener noreferrer' : undefined}>
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button
              href={secondaryHref}
              variant="secondary"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white/10"
              target={secondaryExternal ? '_blank' : undefined}
              rel={secondaryExternal ? 'noopener noreferrer' : undefined}
            >
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </SectionShell>
  )
}
