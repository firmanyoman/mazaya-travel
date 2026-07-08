import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { db } from '@/db'
import { eq } from 'drizzle-orm'
import { packages } from '@/db/schema'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pkg = await db.query.packages.findFirst({
    where: eq(packages.slug, slug),
  })

  if (!pkg) {
    return {
      title: 'Paket Tidak Ditemukan - Mazaya Travel',
    }
  }

  return {
    title: `${pkg.seoTitle || pkg.title} - Mazaya Travel`,
    description: pkg.seoDescription || pkg.packageSummary,
  }
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params
  const pkg = await db.query.packages.findFirst({
    where: eq(packages.slug, slug),
  })

  if (!pkg || pkg.packageStatus === 'archived' || pkg.packageStatus === 'draft') {
    notFound()
  }

  const isSoldOut = pkg.packageStatus === 'sold_out' || (pkg.remainingSeats !== null && pkg.remainingSeats <= 0)

  const formatPrice = (p: number | null) => {
    if (!p) return 'Hubungi Admin'
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(p)
  }

  const whatsappUrl = `https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.title)}`

  return (
    <div className="flex flex-col min-h-screen py-8">
      {/* Header */}
      <header className="mb-8 border-b border-border pb-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/mazaya_travel_rebuild_inventory/assets/Logo.png"
            alt="Logo Mazaya Travel"
            width={120}
            height={44}
            className="object-contain"
            priority
          />
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
        >
          ← Kembali ke Beranda
        </Link>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full">
        {/* Detail Card Layout */}
        <article className="bg-surface rounded-radius-card overflow-hidden border border-border shadow-md">
          {/* Hero Banner / Image */}
          <div className="relative h-64 sm:h-[400px] w-full bg-primary/10">
            {pkg.ogImage ? (
              <Image
                src={pkg.ogImage}
                alt={pkg.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-primary/30">
                <span className="text-8xl">🕋</span>
              </div>
            )}
            {pkg.badgeText && (
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-radius-pill uppercase shadow-sm">
                {pkg.badgeText}
              </div>
            )}
            {isSoldOut && (
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-radius-pill uppercase shadow-sm">
                Habis Terjual
              </div>
            )}
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Header info */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block px-3 py-1 bg-primary-soft text-primary text-xs font-bold rounded-radius-pill uppercase tracking-wider">
                  {pkg.category}
                </span>
                {pkg.tier && (
                  <span className="inline-block px-3 py-1 bg-brand-yellow/30 text-text text-xs font-black rounded-radius-pill">
                    {pkg.tier} Class
                  </span>
                )}
                {pkg.shortLabel && (
                  <span className="text-xs text-muted font-medium">
                    {pkg.shortLabel}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight">
                {pkg.title}
              </h1>
              <p className="text-base text-muted leading-relaxed">
                {pkg.packageSummary}
              </p>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-primary-soft/10 rounded-radius-card border border-border/50">
              <div>
                <span className="block text-xs text-muted">Jadwal Keberangkatan</span>
                <strong className="text-sm text-text">
                  {pkg.departureDate ? new Date(pkg.departureDate).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  }) : '-'}
                </strong>
              </div>
              <div>
                <span className="block text-xs text-muted">Durasi Perjalanan</span>
                <strong className="text-sm text-text">{pkg.durationDays} Hari</strong>
              </div>
              <div>
                <span className="block text-xs text-muted">Rute / Keberangkatan</span>
                <strong className="text-sm text-text">{pkg.departureCity}</strong>
              </div>
              <div>
                <span className="block text-xs text-muted">Sisa Kursi</span>
                <strong className="text-sm text-red-600">
                  {pkg.remainingSeats !== null ? `${pkg.remainingSeats} Kursi` : 'Terbatas'}
                </strong>
              </div>
            </div>

            {/* Price section */}
            <div className="border-t border-b border-border/60 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block text-xs text-muted">Harga Paket</span>
                <strong className="text-3xl font-black text-primary">
                  {pkg.priceMode === 'public' ? formatPrice(pkg.price) : 'Hubungi Admin'}
                </strong>
                {pkg.minimumDeposit && (
                  <span className="block text-xs text-muted mt-1">
                    DP Minimal: {formatPrice(pkg.minimumDeposit)}
                  </span>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                {isSoldOut ? (
                  <button
                    disabled
                    className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 bg-muted text-white text-base font-bold rounded-radius-control cursor-not-allowed"
                  >
                    Pendaftaran Ditutup
                  </button>
                ) : (
                  <Link
                    href={`/daftar?package=${pkg.slug}`}
                    className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 bg-primary text-white text-base font-bold rounded-radius-control hover:bg-primary-hover transition-colors shadow-md"
                  >
                    Daftar Paket Ini
                  </Link>
                )}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 bg-surface text-primary border border-primary text-base font-bold rounded-radius-control hover:bg-primary-soft transition-colors"
                >
                  Konsultasi WhatsApp
                </a>
              </div>
            </div>

            {/* Travel details (Airlines & Hotels) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pkg.airline && (
                <div className="border border-border p-4 rounded-radius-card bg-surface space-y-1">
                  <span className="text-xl">✈️</span>
                  <h4 className="font-bold text-text text-sm">Maskapai Penerbangan</h4>
                  <p className="text-xs text-muted">{pkg.airline}</p>
                </div>
              )}
              {pkg.makkahHotel && (
                <div className="border border-border p-4 rounded-radius-card bg-surface space-y-1">
                  <span className="text-xl">🏢</span>
                  <h4 className="font-bold text-text text-sm">Hotel Makkah</h4>
                  <p className="text-xs text-muted">{pkg.makkahHotel}</p>
                </div>
              )}
              {pkg.madinahHotel && (
                <div className="border border-border p-4 rounded-radius-card bg-surface space-y-1">
                  <span className="text-xl">🏢</span>
                  <h4 className="font-bold text-text text-sm">Hotel Madinah</h4>
                  <p className="text-xs text-muted">{pkg.madinahHotel}</p>
                </div>
              )}
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/60 pt-8">
              {pkg.inclusions && pkg.inclusions.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-text flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Harga Termasuk (Inclusions)
                  </h3>
                  <ul className="space-y-2 text-sm text-muted list-disc pl-5">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i}>{inc}</li>
                    ))}
                  </ul>
                </div>
              )}

              {pkg.exclusions && pkg.exclusions.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-text flex items-center gap-2">
                    <span className="text-red-600">✗</span> Belum Termasuk (Exclusions)
                  </h3>
                  <ul className="space-y-2 text-sm text-muted list-disc pl-5">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i}>{exc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Requirements & Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/60 pt-8">
              {pkg.requirements && pkg.requirements.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-text">📋 Persyaratan Dokumen</h3>
                  <ul className="space-y-2 text-sm text-muted list-decimal pl-5">
                    {pkg.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {pkg.paymentNotes && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-text">💳 Catatan Pembayaran</h3>
                  <p className="text-sm text-muted whitespace-pre-line leading-relaxed">
                    {pkg.paymentNotes}
                  </p>
                </div>
              )}
            </div>

            {/* Itinerary summary */}
            {pkg.itinerarySummary && (
              <div className="border-t border-border/60 pt-8 space-y-3">
                <h3 className="text-lg font-bold text-text">🗺️ Rencana Perjalanan (Itinerary)</h3>
                <p className="text-sm text-muted whitespace-pre-line leading-relaxed">
                  {pkg.itinerarySummary}
                </p>
              </div>
            )}
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-border/60 text-center text-xs text-muted">
        <p>© 2026 PT Mazaya Amanah Wisata. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  )
}
