import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articleBySlug, articles } from '../articles'
import { ContentCta, ContentHero, ContentPageLayout } from '@/components/content/ContentPage'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articleBySlug.get(slug)

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan - Mazaya Travel',
    }
  }

  return {
    title: `${article.title} - Mazaya Travel`,
    description: article.excerpt,
  }
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params
  const article = articleBySlug.get(slug)

  if (!article) {
    notFound()
  }

  const whatsappUrl =
    'https://wa.me/6285298751997?text=' +
    encodeURIComponent(`Assalamualaikum Mazaya Travel, saya ingin konsultasi setelah membaca artikel ${article.title}`)

  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 3)

  return (
    <ContentPageLayout>
      <ContentHero
        eyebrow={article.category}
        backHref="/artikel"
        backLabel="Kembali ke Artikel"
        title={article.title}
        summary={article.excerpt}
        actions={
          <>
            <Button href="/paket-umrah" size="lg">
              Lihat paket Umrah
            </Button>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              Konsultasi WhatsApp
            </Button>
          </>
        }
        metrics={[
          { value: formatDate(article.publishedAt), label: 'Tanggal publikasi artikel' },
          { value: article.readTime, label: 'Estimasi waktu baca' },
          { value: `${article.sections.length} bahasan`, label: 'Poin pembahasan utama dalam artikel ini' },
        ]}
        panelTitle="Ringkasan artikel"
        panelItems={[
          { label: 'Kategori', value: article.category },
          { label: 'Tujuan baca', value: 'Membantu memahami kesiapan, pertimbangan paket, dan langkah lanjut sebelum konsultasi' },
          { label: 'Arah setelah membaca', value: 'Cek paket aktif atau gunakan WhatsApp untuk pertanyaan yang lebih spesifik' },
        ]}
      />

      <SectionShell className="px-1">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
          <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8 lg:px-10">
            <article className="mx-auto max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-primary">{article.category}</span>
                <span>{formatDate(article.publishedAt)}</span>
                <span>{article.readTime}</span>
              </div>
              <div className="mt-8 space-y-10">
                {article.sections.map((section) => (
                  <section key={section.heading} className="space-y-4">
                    <h2 className="text-2xl font-bold leading-tight text-text sm:text-[30px]">{section.heading}</h2>
                    <div className="space-y-4 text-base leading-8 text-text-secondary">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="max-w-[70ch]">{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </SectionShell>

          <div className="grid gap-4 xl:sticky xl:top-6">
            <SectionShell surface="card" className="px-5 py-5 md:px-6 md:py-6">
              <div className="text-sm font-semibold text-primary">Setelah selesai membaca</div>
              <div className="mt-4 grid gap-3">
                <Button href="/paket-umrah" fullWidth>
                  Lihat paket aktif
                </Button>
                <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" fullWidth>
                  Tanya via WhatsApp
                </Button>
              </div>
              <div className="mt-4 rounded-[16px] border border-border bg-surface-subtle px-4 py-3 text-sm leading-7 text-muted">
                Cocok dipakai saat Anda sudah paham konteks artikel dan ingin menanyakan jadwal, dokumen, atau kesiapan daftar.
              </div>
            </SectionShell>

            {relatedArticles.length > 0 ? (
              <SectionShell surface="card" className="px-5 py-5 md:px-6 md:py-6">
                <div className="text-sm font-semibold text-primary">Bacaan terkait</div>
                <div className="mt-4 grid gap-3">
                  {relatedArticles.map((item) => (
                    <Link key={item.slug} href={`/artikel/${item.slug}`} className="rounded-[16px] border border-border bg-surface-subtle px-4 py-4 transition-colors hover:border-primary/30 hover:bg-primary-soft/30">
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{item.category}</div>
                      <div className="mt-2 text-sm font-semibold leading-7 text-text">{item.title}</div>
                    </Link>
                  ))}
                </div>
              </SectionShell>
            ) : null}
          </div>
        </div>
      </SectionShell>

      <ContentCta
        eyebrow="Langkah berikutnya"
        title={article.ctaTitle}
        summary={article.ctaText}
        primaryHref="/paket-umrah"
        primaryLabel="Lihat paket"
        secondaryHref={whatsappUrl}
        secondaryLabel="WhatsApp konsultasi"
        secondaryExternal
      />
    </ContentPageLayout>
  )
}
