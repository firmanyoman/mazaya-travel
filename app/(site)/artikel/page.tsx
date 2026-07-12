import type { Metadata } from 'next'
import { ContentCta, ContentHero, ContentPageLayout, ContentSection } from '@/components/content/ContentPage'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'
import { articles } from './articles'

export const metadata: Metadata = {
  title: 'Artikel Umrah & Haji | Panduan Dokumen, Biaya, dan Paket',
  description:
    'Baca panduan Umrah dan Haji dari Mazaya Travel tentang dokumen, biaya, legalitas, persiapan ibadah, dan cara memilih paket yang sesuai.',
}
const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20setelah%20membaca%20artikel'

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

const categoryCount = new Set(articles.map((article) => article.category)).size
const latestArticles = [...articles].sort((a, b) => a.publishedAt.localeCompare(b.publishedAt)).reverse()
const featuredArticle = latestArticles[0]
const articleCategories = Array.from(new Set(latestArticles.map((article) => article.category)))

export default function ArtikelPage() {
  return (
    <ContentPageLayout>
      <ContentHero
        eyebrow="Artikel Umrah & Haji"
        backHref="/"
        backLabel="Kembali ke Beranda"
        title="Panduan singkat untuk calon jemaah yang ingin berangkat dengan persiapan lebih matang."
        summary="Halaman ini berisi artikel yang membantu Anda memahami biaya, dokumen, alur pendaftaran, dan hal penting sebelum memilih paket Umrah atau Haji."
        actions={
          <>
            <Button href={featuredArticle ? `/artikel/${featuredArticle.slug}` : '/paket-umrah'} size="lg">
              {featuredArticle ? 'Baca artikel terbaru' : 'Lihat paket Umrah'}
            </Button>
            <Button href="/paket-umrah" variant="secondary" size="lg">
              Lihat paket Umrah
            </Button>
          </>
        }
        metrics={[
          { value: `${articles.length} artikel`, label: 'Pembahasan ringkas seputar Umrah, Haji, dokumen, dan biaya' },
          { value: `${categoryCount} topik`, label: 'Memudahkan Anda memilih bacaan sesuai kebutuhan saat ini' },
          { value: 'Siap dibaca di HP', label: 'Nyaman dibuka saat berdiskusi dengan pasangan atau keluarga' },
        ]}
        panelTitle="Cara memakai halaman ini"
        panelItems={[
          { label: 'Mulai dari', value: featuredArticle ? featuredArticle.title : 'Artikel yang paling sesuai dengan pertanyaan Anda' },
          { label: 'Lanjut ke', value: 'Halaman paket jika sudah ingin membandingkan jadwal dan harga' },
          { label: 'Hubungi WhatsApp', value: 'Jika ingin bertanya lebih lanjut setelah membaca artikel' },
        ]}
      />

      {featuredArticle ? (
        <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            <div className="space-y-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-yellow/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-text">
                Artikel pilihan
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  <span className="rounded-full bg-primary-soft px-3 py-1 text-primary">{featuredArticle.category}</span>
                  <span>{formatDate(featuredArticle.publishedAt)}</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <h2 className="max-w-3xl text-3xl font-bold leading-tight text-text sm:text-4xl">{featuredArticle.title}</h2>
                <p className="max-w-2xl text-base leading-8 text-muted">{featuredArticle.excerpt}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={`/artikel/${featuredArticle.slug}`}>Baca artikel ini</Button>
                <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                  Tanya admin setelah membaca
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[20px] border border-border bg-surface-subtle p-5 shadow-[var(--shadow-1)]">
                <div className="text-sm font-semibold text-primary">Topik yang paling sering dicari</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {articleCategories.map((category) => (
                    <span key={category} className="rounded-full border border-border bg-surface px-3 py-2 text-sm font-medium text-text-secondary">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[20px] border border-primary/10 bg-primary p-5 text-white shadow-[var(--shadow-2)]">
                <div className="text-sm font-semibold text-white/72">Manfaat membaca artikel</div>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Dengan membaca dulu, Anda biasanya lebih mudah memahami paket yang cocok, dokumen yang perlu disiapkan, dan pertanyaan apa yang perlu diajukan saat konsultasi.
                </p>
              </div>
            </div>
          </div>
        </SectionShell>
      ) : null}

      <ContentSection
        eyebrow="Semua artikel"
        title="Bacaan singkat yang membantu Anda lebih siap sebelum mendaftar."
        summary="Setiap artikel dibuat untuk menjawab pertanyaan umum calon jemaah, supaya Anda tidak mulai dari nol saat menghubungi admin."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestArticles.map((article) => (
            <article key={article.slug} className="flex h-full flex-col rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em]">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-primary">{article.category}</span>
                <span className="text-muted">{formatDate(article.publishedAt)}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold leading-snug text-text">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{article.excerpt}</p>
              <div className="mt-5 rounded-[16px] border border-border bg-surface-subtle px-4 py-3 text-sm text-text-secondary">
                {article.readTime}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Button href={`/artikel/${article.slug}`} variant="secondary" fullWidth>
                  Baca artikel
                </Button>
                <Button href="/paket-umrah" fullWidth>
                  Lihat paket
                </Button>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentCta
        eyebrow="Langkah berikutnya"
        title="Sudah dapat gambaran? Lanjutkan ke paket atau konsultasi langsung."
        summary="Anda bisa melihat paket aktif untuk membandingkan jadwal dan harga, atau langsung bertanya lewat WhatsApp bila ingin arahan yang lebih spesifik."
        primaryHref="/paket-umrah"
        primaryLabel="Lihat paket Umrah"
        secondaryHref={whatsappUrl}
        secondaryLabel="WhatsApp konsultasi"
        secondaryExternal
      />
    </ContentPageLayout>
  )
}
