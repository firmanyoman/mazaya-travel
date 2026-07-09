import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { and, asc, eq, gte, or } from 'drizzle-orm'
import { db } from '@/db'
import { packages } from '@/db/schema'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

export const metadata: Metadata = {
  title: 'Paket Umrah Bone - Mazaya Travel',
  description:
    'Lihat daftar paket Umrah aktif Mazaya Travel untuk jamaah Bone dan sekitarnya, lengkap dengan jadwal, durasi, status kursi, dan jalur konsultasi WhatsApp.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20paket%20Umrah'

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

export default async function PaketUmrahPage() {
  const packageList = await db.query.packages.findMany({
    where: and(
      eq(packages.category, 'umrah'),
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
            Paket Umrah Mazaya Travel
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-text sm:text-4xl">
            Pilihan Paket Umrah yang Mudah Dipindai dan Siap Dipertimbangkan
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            Halaman ini menampilkan paket Umrah berstatus aktif atau sold out yang masih relevan untuk calon jemaah Bone dan sekitarnya. Lihat detail paket terlebih dulu, lalu lanjut daftar atau konsultasi via WhatsApp.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/daftar"
              className="inline-flex items-center justify-center rounded-radius-control bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-primary-hover"
            >
              Daftar Sekarang
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-radius-control border border-primary bg-surface px-6 py-3 font-bold text-primary transition-colors hover:bg-primary-soft"
            >
              WhatsApp Konsultasi
            </a>
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
                    {(pkg.airline || pkg.makkahHotel || pkg.madinahHotel) ? (
                      <div className="col-span-2 text-muted">
                        <dt className="text-muted">Ringkasan Fasilitas</dt>
                        <dd className="mt-1 leading-relaxed text-text">
                          {[pkg.airline, pkg.makkahHotel, pkg.madinahHotel].filter(Boolean).join(' • ')}
                        </dd>
                      </div>
                    ) : null}
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
          <section className="rounded-radius-card border border-border bg-surface p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-text">Belum ada paket Umrah aktif saat ini</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
              Jadwal baru bisa menyusul atau sedang dalam proses pembaruan. Untuk kebutuhan paling cepat, hubungi tim kami via WhatsApp agar Anda tetap mendapat arahan paket, estimasi keberangkatan, dan langkah pendaftaran awal.
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
                href="/kontak"
                className="inline-flex items-center justify-center rounded-radius-control border border-primary bg-surface px-6 py-3 font-bold text-primary transition-colors hover:bg-primary-soft"
              >
                Lihat Kontak Lengkap
              </Link>
            </div>
          </section>
        )}

        <section className="rounded-radius-card border border-border bg-primary text-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold">Butuh bantuan pilih paket yang paling cocok?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85">
            Jika masih membandingkan jadwal, budget, atau kesiapan dokumen, mulai dari konsultasi singkat dulu. Setelah itu Anda bisa lanjut ke detail paket atau pendaftaran online.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-radius-control bg-white px-6 py-3 font-bold text-primary transition-opacity hover:opacity-90"
            >
              WhatsApp Konsultasi
            </a>
            <Link
              href="/daftar"
              className="inline-flex items-center justify-center rounded-radius-control border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition-colors hover:bg-white/15"
            >
              Daftar Sekarang
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
