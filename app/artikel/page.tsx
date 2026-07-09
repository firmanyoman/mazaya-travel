import type { Metadata } from 'next'
import { ContentCta, ContentHero, ContentPageLayout, ContentSection } from '@/components/content/ContentPage'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'
import { articles } from './articles'

export const metadata: Metadata = {
  title: 'Artikel Umrah Bone - Mazaya Travel',
  description:
    'Baca artikel edukasi Umrah dari Mazaya Travel untuk membantu calon jamaah Bone memahami trust, dokumen, konsultasi, dan langkah memilih paket.',
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
        eyebrow="Editorial Mazaya"
        backHref="/"
        backLabel="Kembali ke Beranda"
        title="Artikel edukasi yang membantu calon jemaah membaca trust, kesiapan, dan langkah berikutnya dengan lebih tenang."
        summary="Kumpulan artikel ini disusun sebagai ruang baca yang rapi untuk calon jemaah dan keluarga: cukup informatif untuk discovery, tetapi tetap ringan dipindai di mobile sebelum lanjut ke paket atau konsultasi."
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
          { value: `${articles.length} artikel`, label: 'Panduan ringkas untuk trust, dokumen, dan keputusan awal' },
          { value: `${categoryCount} topik`, label: 'Dikelompokkan agar lebih mudah menemukan bacaan yang relevan' },
          { value: 'Mobile-first', label: 'Ritme baca dibuat lebih nyaman untuk layar kecil' },
        ]}
        panelTitle="Cara memakai halaman ini"
        panelItems={[
          { label: 'Mulai dari', value: featuredArticle ? featuredArticle.title : 'Artikel yang paling relevan dengan pertanyaan Anda' },
          { label: 'Lanjut ke', value: 'Paket aktif jika sudah punya gambaran jadwal atau budget' },
          { label: 'Gunakan WhatsApp', value: 'Saat butuh klarifikasi yang lebih spesifik setelah membaca' },
        ]}
      />

      {featuredArticle ? (
        <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            <div className="space-y-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-radius-pill bg-brand-yellow/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-text">
                Pilihan editor
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  <span className="rounded-radius-pill bg-primary-soft px-3 py-1 text-primary">{featuredArticle.category}</span>
                  <span>{formatDate(featuredArticle.publishedAt)}</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <h2 className="max-w-3xl text-3xl font-bold leading-tight text-text sm:text-4xl">{featuredArticle.title}</h2>
                <p className="max-w-2xl text-base leading-8 text-muted">{featuredArticle.excerpt}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={`/artikel/${featuredArticle.slug}`}>Baca artikel ini</Button>
                <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                  Konsultasi setelah membaca
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[20px] border border-border bg-surface-subtle p-5 shadow-[var(--shadow-1)]">
                <div className="text-sm font-semibold text-primary">Topik yang banyak dicari</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {articleCategories.map((category) => (
                    <span key={category} className="rounded-radius-pill border border-border bg-surface px-3 py-2 text-sm font-medium text-text-secondary">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[20px] border border-primary/10 bg-primary p-5 text-white shadow-[var(--shadow-2)]">
                <div className="text-sm font-semibold text-white/72">Tujuan editorial</div>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Membantu pengunjung memahami hal penting lebih dulu, sehingga percakapan konsultasi menjadi lebih fokus dan tidak mengulang pertanyaan dasar.
                </p>
              </div>
            </div>
          </div>
        </SectionShell>
      ) : null}

      <ContentSection
        eyebrow="Semua artikel"
        title="Bacaan yang lebih terkurasi untuk tahap awal penilaian dan persiapan"
        summary="Setiap kartu menampilkan sinyal baca yang penting lebih dulu: topik, tanggal publikasi, waktu baca, dan ringkasan manfaatnya."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestArticles.map((article) => (
            <article key={article.slug} className="flex h-full flex-col rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em]">
                <span className="rounded-radius-pill bg-primary-soft px-3 py-1 text-primary">{article.category}</span>
                <span className="text-muted">{formatDate(article.publishedAt)}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold leading-snug text-text">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{article.excerpt}</p>
              <div className="mt-5 rounded-radius-lg border border-border bg-surface-subtle px-4 py-3 text-sm text-text-secondary">
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
        eyebrow="Langkah tenang berikutnya"
        title="Sudah menemukan bacaan yang relevan? Lanjutkan dengan langkah yang paling ringan dulu."
        summary="Anda bisa membuka paket aktif untuk membandingkan jadwal dan harga, atau langsung bertanya via WhatsApp jika ingin arahan yang lebih spesifik."
        primaryHref="/paket-umrah"
        primaryLabel="Lihat paket Umrah"
        secondaryHref={whatsappUrl}
        secondaryLabel="WhatsApp konsultasi"
        secondaryExternal
      />
    </ContentPageLayout>
  )
}
