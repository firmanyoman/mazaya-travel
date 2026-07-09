import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'
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

export default function ArtikelPage() {
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
        <Link href="/" className="text-sm font-semibold text-primary hover:underline">
          ← Kembali ke Beranda
        </Link>
      </header>

      <main className="mx-auto flex-1 w-full max-w-6xl space-y-8">
        <section className="rounded-radius-card border border-border bg-primary-soft/20 px-6 py-10 sm:px-10">
          <span className="inline-block rounded-radius-pill bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            Artikel Mazaya Travel
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-text sm:text-4xl">
            Artikel Edukasi Umrah untuk Membantu Calon Jemaah Menilai dan Menyiapkan Langkah
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            Halaman ini berisi artikel edukatif yang dibuat untuk kebutuhan discovery, SEO, dan penguatan trust. Fokusnya sederhana: membantu calon jemaah memahami hal penting sebelum lanjut melihat paket atau membuka konsultasi.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="flex h-full flex-col rounded-radius-card border border-border bg-surface p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wide">
                <span className="rounded-radius-pill bg-primary-soft px-3 py-1 text-primary">
                  {article.category}
                </span>
                <span className="text-muted">{formatDate(article.publishedAt)}</span>
              </div>
              <h2 className="mt-4 text-xl font-bold leading-snug text-text">{article.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{article.excerpt}</p>
              <div className="mt-5 rounded-radius-card border border-border bg-primary-soft/10 p-4 text-sm text-text">
                <p>{article.readTime}</p>
              </div>
              <div className="mt-6 flex gap-3">
                <Link
                  href={`/artikel/${article.slug}`}
                  className="inline-flex items-center justify-center rounded-radius-control bg-primary px-5 py-3 font-bold text-white transition-colors hover:bg-primary-hover"
                >
                  Baca Artikel
                </Link>
                <Link
                  href="/paket-umrah"
                  className="inline-flex items-center justify-center rounded-radius-control border border-primary bg-surface px-5 py-3 font-bold text-primary transition-colors hover:bg-primary-soft"
                >
                  Lihat Paket
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-text">Apa yang bisa dibaca di sini?</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>Artikel ringkas tentang trust, legalitas, konsultasi, dan persiapan awal Umrah.</li>
              <li>Bahasa dibuat mudah dipindai untuk pembaca mobile dan user discovery dari Google.</li>
              <li>Setelah membaca, user diarahkan secara wajar ke paket aktif atau WhatsApp.</li>
            </ul>
          </article>
          <article className="rounded-radius-card border border-border bg-primary p-6 text-white shadow-sm">
            <h2 className="text-2xl font-extrabold">Butuh langkah berikutnya yang lebih praktis?</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Setelah membaca artikel, Anda bisa lanjut cek paket Umrah yang tersedia atau konsultasi singkat untuk menanyakan jadwal, dokumen, dan kesiapan daftar.
            </p>
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
          </article>
        </section>
      </main>
    </div>
  )
}
