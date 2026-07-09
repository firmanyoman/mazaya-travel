import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articleBySlug, articles } from '../articles'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

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

  return (
    <div className="flex min-h-screen flex-col py-8">
      <header className="mb-8 flex items-center justify-between border-b border-border pb-4">
        <Link href="/">
          <Image
            src={logoImage}
            alt="Logo Mazaya Travel"
            className="h-auto w-[120px] object-contain"
            priority
          />
        </Link>
        <Link href="/artikel" className="text-sm font-semibold text-primary hover:underline">
          ← Kembali ke Artikel
        </Link>
      </header>

      <main className="mx-auto flex-1 w-full max-w-4xl space-y-8">
        <article className="rounded-radius-card border border-border bg-surface p-6 shadow-sm sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wide">
            <span className="rounded-radius-pill bg-primary px-3 py-1 text-white">
              {article.category}
            </span>
            <span className="rounded-radius-pill border border-border bg-primary-soft/20 px-3 py-1 text-primary">
              {formatDate(article.publishedAt)}
            </span>
            <span className="text-muted">{article.readTime}</span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-text sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{article.excerpt}</p>

          <div className="mt-8 h-px w-full bg-border" />

          <div className="mt-8 space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-extrabold text-text">{section.heading}</h2>
                <div className="space-y-4 text-base leading-8 text-text/90">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <section className="rounded-radius-card border border-border bg-primary p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold">{article.ctaTitle}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85">{article.ctaText}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/paket-umrah"
              className="inline-flex items-center justify-center rounded-radius-control bg-white px-6 py-3 font-bold text-primary transition-opacity hover:opacity-90"
            >
              Lihat Paket
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-radius-control border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition-colors hover:bg-white/15"
            >
              WhatsApp Konsultasi
            </a>
          </div>
        </section>

        <section className="rounded-radius-card border border-border bg-primary-soft/20 px-6 py-8 sm:px-8">
          <h2 className="text-2xl font-extrabold text-text">Lanjut baca atau cek halaman trust lain</h2>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/artikel"
              className="inline-flex items-center justify-center rounded-radius-control border border-primary bg-surface px-5 py-3 font-bold text-primary transition-colors hover:bg-primary-soft"
            >
              Lihat Artikel Lain
            </Link>
            <Link
              href="/legalitas"
              className="inline-flex items-center justify-center rounded-radius-control border border-primary bg-surface px-5 py-3 font-bold text-primary transition-colors hover:bg-primary-soft"
            >
              Cek Legalitas
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center rounded-radius-control border border-primary bg-surface px-5 py-3 font-bold text-primary transition-colors hover:bg-primary-soft"
            >
              Hubungi Kami
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
