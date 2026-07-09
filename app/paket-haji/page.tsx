import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { and, asc, eq, gte, or } from 'drizzle-orm'
import { db } from '@/db'
import { packages } from '@/db/schema'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

export const metadata: Metadata = {
  title: 'Paket Haji Bone - Mazaya Travel',
  description:
    'Lihat daftar paket Haji Mazaya Travel untuk calon jamaah Bone dan sekitarnya. Jika belum ada jadwal aktif, halaman tetap memberi jalur konsultasi dan langkah lanjut.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20paket%20Haji'

const today = new Date().toISOString().slice(0, 10)

const formatCurrency = (price: number | null) => {
  if (!price) return 'Hubungi Admin'

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

export default async function PaketHajiPage() {
  const packageList = await db.query.packages.findMany({
    where: and(
      eq(packages.category, 'haji'),
      or(eq(packages.packageStatus, 'active'), eq(packages.packageStatus, 'sold_out')),
      gte(packages.departureDate, today)
    ),
    orderBy: [asc(packages.departureDate)],
  })

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

      <main className="mx-auto flex-1 w-full max-w-5xl space-y-8">
        <section className="rounded-radius-card border border-border bg-primary-soft/20 px-6 py-10 sm:px-10">
          <span className="inline-block rounded-radius-pill bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            Paket Haji Mazaya Travel
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-text sm:text-4xl">
            Informasi Paket Haji dengan Struktur yang Tetap Jelas dan Tenang
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            Kami menampilkan paket Haji yang tersedia dengan pola informasi yang konsisten seperti halaman Umrah. Bila jadwal belum tersedia, halaman ini tetap memberi jalur konsultasi cepat agar calon jemaah tidak berhenti di halaman kosong.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-radius-control bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-primary-hover"
            >
              WhatsApp Konsultasi
            </a>
            <Link
              href="/daftar"
              className="inline-flex items-center justify-center rounded-radius-control border border-primary bg-surface px-6 py-3 font-bold text-primary transition-colors hover:bg-primary-soft"
            >
              Daftar Sekarang
            </Link>
          </div>
        </section>

        {packageList.length > 0 ? (
          <section className="grid gap-6 md:grid-cols-2">
            {packageList.map((pkg) => {
              const isSoldOut = pkg.packageStatus === 'sold_out' || (pkg.remainingSeats !== null && pkg.remainingSeats <= 0)

              return (
                <article key={pkg.id} className="flex h-full flex-col rounded-radius-card border border-border bg-surface p-6 shadow-sm">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-radius-pill bg-primary-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                      {pkg.category}
                    </span>
                    {pkg.tier ? (
                      <span className="rounded-radius-pill bg-brand-yellow/30 px-3 py-1 text-xs font-black text-text">
                        {pkg.tier} Class
                      </span>
                    ) : null}
                    <span
                      className={isSoldOut
                        ? 'rounded-radius-pill border border-red-200 bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-600'
                        : 'rounded-radius-pill border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700'}
                    >
                      {isSoldOut ? 'Sold Out' : 'Aktif'}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-bold text-text">{pkg.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{pkg.packageSummary}</p>

                  <dl className="mt-5 grid grid-cols-2 gap-4 rounded-radius-card border border-border bg-primary-soft/10 p-4 text-sm">
                    <div>
                      <dt className="text-muted">Keberangkatan</dt>
                      <dd className="font-semibold text-text">{formatDate(pkg.departureDate)}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Durasi</dt>
                      <dd className="font-semibold text-text">{pkg.durationDays} Hari</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Kota Berangkat</dt>
                      <dd className="font-semibold text-text">{pkg.departureCity}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Sisa Kursi</dt>
                      <dd className="font-semibold text-text">
                        {pkg.remainingSeats !== null ? `${pkg.remainingSeats} Kursi` : 'Konfirmasi ke admin'}
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-muted">Harga</dt>
                      <dd className="text-lg font-black text-primary">
                        {pkg.priceMode === 'public' ? formatCurrency(pkg.price) : 'Hubungi Admin'}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Link
                      href={`/paket/${pkg.slug}`}
                      className="inline-flex items-center justify-center rounded-radius-control border border-primary bg-surface px-5 py-3 font-bold text-primary transition-colors hover:bg-primary-soft"
                    >
                      Lihat Detail
                    </Link>
                    {isSoldOut ? (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-radius-control bg-primary px-5 py-3 font-bold text-white transition-colors hover:bg-primary-hover"
                      >
                        WhatsApp Konsultasi
                      </a>
                    ) : (
                      <Link
                        href={`/daftar/${pkg.slug}`}
                        className="inline-flex items-center justify-center rounded-radius-control bg-primary px-5 py-3 font-bold text-white transition-colors hover:bg-primary-hover"
                      >
                        Daftar Sekarang
                      </Link>
                    )}
                  </div>
                </article>
              )
            })}
          </section>
        ) : (
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-radius-card border border-border bg-surface p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-text">Belum ada paket Haji aktif saat ini</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Saat launch ini, jadwal Haji bisa saja belum dipublikasikan atau masih menunggu pembaruan. Halaman tetap kami sediakan agar Anda bisa langsung konsultasi, menanyakan proyeksi jadwal, dan memahami langkah awal yang perlu disiapkan.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                <li>Persiapkan nama lengkap dan nomor WhatsApp aktif untuk konsultasi awal.</li>
                <li>Tanyakan estimasi jadwal, skema pembayaran, dan kebutuhan dokumen awal.</li>
                <li>Gunakan jalur WhatsApp untuk respon tercepat dari tim Mazaya Travel.</li>
              </ul>
            </article>
            <article className="rounded-radius-card border border-border bg-primary text-white p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold">Lanjut dari sini</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                Tim kami siap membantu menjelaskan apakah sudah ada paket Haji yang bisa dipertimbangkan, atau kapan Anda sebaiknya follow up kembali.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-radius-control bg-white px-6 py-3 font-bold text-primary transition-opacity hover:opacity-90"
                >
                  WhatsApp Konsultasi
                </a>
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center rounded-radius-control border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition-colors hover:bg-white/15"
                >
                  Lihat Kontak Lengkap
                </Link>
              </div>
            </article>
          </section>
        )}
      </main>
    </div>
  )
}
