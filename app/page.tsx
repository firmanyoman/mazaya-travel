import Image from 'next/image'

const trustBadges = [
  'Travel resmi',
  'Berbasis di Bone',
  'Pendampingan amanah',
]

const sectionTitles = [
  'Quick trust strip',
  'Why choose Mazaya',
  'Featured packages',
  'Cara daftar',
  'Dokumentasi preview',
  'Legalitas preview',
  'Testimoni preview',
  'FAQ preview',
  'Closing CTA',
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-warm-ivory text-text">
      <header className="sticky top-0 z-10 border-b border-border bg-warm-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-[var(--container)] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Mazaya Travel
            </p>
            <p className="text-sm text-muted">Foundation shell</p>
          </div>
          <a
            href="#hero"
            className="rounded-sm bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            Daftar Sekarang
          </a>
        </div>
      </header>

      <section id="hero" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[var(--container)] gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-pill bg-primary-soft px-4 py-2 text-sm font-semibold text-primary">
              Trust-first homepage foundation
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.02em] sm:text-5xl">
                Daftar Umrah Lebih Tenang Bersama Travel Resmi dan Terpercaya di Bone
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Homepage shell ini siapkan visual anchor, CTA hierarchy, dan token dasar sesuai sistem desain Mazaya Amanah Teal.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#next-sections"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Daftar Sekarang
              </a>
              <a
                href="#next-sections"
                className="inline-flex items-center justify-center rounded-sm border border-border bg-surface px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-soft"
              >
                WhatsApp Konsultasi
              </a>
            </div>
            <ul className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-pill bg-surface px-4 py-2 text-sm font-medium text-text ring-1 ring-border"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-md border border-border bg-surface">
            <Image
              src="/hero-placeholder.svg"
              alt="Mazaya homepage placeholder illustration"
              width={960}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="next-sections" className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-[var(--container)] rounded-md border border-border bg-surface p-6 sm:p-8 lg:p-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                Homepage roadmap shell
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                Placeholder section map align ke blueprint, wireframe, dan content matrix. Siap diisi komponen nyata bertahap.
              </p>
            </div>
            <span className="hidden rounded-pill bg-brand-yellow px-4 py-2 text-sm font-semibold text-text sm:inline-flex">
              Design-token ready
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sectionTitles.map((title, index) => (
              <article
                key={title}
                className="rounded-[calc(var(--radius-card)-8px)] border border-border bg-warm-ivory p-5"
              >
                <p className="text-sm font-semibold text-primary">Section {index + 2}</p>
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Placeholder shell for iterative build. Keep primary CTA dominant and trust proof early.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
