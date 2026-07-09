import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { eq } from 'drizzle-orm'
import { Container } from '@/components/layout/Container'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'
import { db } from '@/db'
import { packages } from '@/db/schema'

interface Props {
  params: Promise<{ slug: string }>
}

function formatPrice(price: number | null) {
  if (!price) return 'Hubungi Admin'

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function getSeatState(remainingSeats: number | null, totalSeats: number | null, isSoldOut: boolean) {
  if (isSoldOut) {
    return {
      label: 'Sold out',
      detail: 'Kuota pada keberangkatan ini sudah habis. Tim Mazaya dapat membantu mencarikan jadwal terdekat lainnya.',
      className: 'border-danger/15 bg-danger-soft text-danger',
      barClassName: 'bg-danger',
      width: '100%',
    }
  }

  if (!remainingSeats || !totalSeats) {
    return {
      label: 'Perlu konfirmasi seat',
      detail: 'Silakan konsultasi untuk memastikan kuota kursi terbaru sebelum melanjutkan pendaftaran.',
      className: 'border-info/15 bg-info-soft text-info',
      barClassName: 'bg-info',
      width: '40%',
    }
  }

  const percentage = Math.max(0, Math.min(100, Math.round((remainingSeats / totalSeats) * 100)))

  if (percentage <= 20) {
    return {
      label: `Sisa ${remainingSeats} dari ${totalSeats} kursi`,
      detail: 'Kuota mulai terbatas. Baik untuk segera diklarifikasi jika jadwal ini menjadi prioritas keluarga.',
      className: 'border-warning/20 bg-warning-soft text-[#8A6911]',
      barClassName: 'bg-warning',
      width: `${percentage}%`,
    }
  }

  return {
    label: `Sisa ${remainingSeats} dari ${totalSeats} kursi`,
    detail: 'Ketersediaan masih relatif nyaman untuk dipertimbangkan dan didiskusikan lebih lanjut.',
    className: 'border-success/20 bg-success-soft text-success',
    barClassName: 'bg-success',
    width: `${percentage}%`,
  }
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
  const seatState = getSeatState(pkg.remainingSeats, pkg.totalSeats, isSoldOut)
  const whatsappUrl = `https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.title)}`
  const infoBlocks = [
    {
      label: 'Tanggal keberangkatan',
      value: pkg.departureDate ? formatDate(pkg.departureDate) : 'Jadwal menyusul',
    },
    {
      label: 'Durasi perjalanan',
      value: `${pkg.durationDays} Hari`,
    },
    {
      label: 'Kota keberangkatan',
      value: pkg.departureCity,
    },
    {
      label: 'Kategori paket',
      value: pkg.category,
    },
  ]

  return (
    <Container className="pb-12 pt-4 md:pt-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <SectionShell surface="card" className="relative overflow-hidden px-6 py-8 md:px-8 lg:px-12 lg:py-12">
          <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top_left,rgba(97,199,195,0.22),transparent_56%)]" />
          <div className="absolute right-8 top-8 hidden h-16 w-16 rounded-full bg-brand-yellow/20 blur-2xl lg:block" />
          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-text-secondary">
                <Link href="/" className="transition-colors hover:text-primary">
                  Beranda
                </Link>
                <span className="text-border-strong">/</span>
                <Link href="/paket-umrah" className="transition-colors hover:text-primary">
                  Paket Umrah
                </Link>
                <span className="text-border-strong">/</span>
                <span className="text-muted">{pkg.shortLabel || pkg.title}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-radius-pill border border-primary/10 bg-primary-soft px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                  Detail Paket
                </span>
                {pkg.tier ? (
                  <span className="rounded-radius-pill bg-brand-yellow/80 px-3 py-1 text-xs font-bold text-text">
                    {pkg.tier} Class
                  </span>
                ) : null}
                <span
                  className={isSoldOut
                    ? 'rounded-radius-pill border border-danger/15 bg-danger-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-danger'
                    : 'rounded-radius-pill border border-success/20 bg-success-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-success'}
                >
                  {isSoldOut ? 'Sold out' : 'Tersedia'}
                </span>
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-[52px] lg:leading-[1.16]">
                  {pkg.title}
                </h1>
                <p className="max-w-2xl text-[17px] leading-8 text-muted lg:text-lg">
                  {pkg.packageSummary}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {infoBlocks.map((item) => (
                  <div key={item.label} className="rounded-radius-lg border border-border bg-surface-subtle px-4 py-4">
                    <div className="text-sm text-muted">{item.label}</div>
                    <div className="mt-1 text-sm font-semibold leading-7 text-text-secondary">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[24px] border border-border bg-primary shadow-[var(--shadow-3)]">
              {pkg.ogImage ? (
                <Image
                  src={pkg.ogImage}
                  alt={pkg.title}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
                  priority
                />
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center bg-primary-soft text-6xl text-primary lg:aspect-[5/4]">
                  Ka&apos;bah
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/72 via-primary/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                {pkg.badgeText ? (
                  <div className="mb-3 inline-flex items-center gap-2 rounded-radius-pill border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                    {pkg.badgeText}
                  </div>
                ) : null}
                <div className="text-sm font-semibold text-white/72">Mazaya Travel</div>
                <div className="mt-2 text-xl font-bold leading-snug md:text-2xl">
                  Halaman keputusan yang menampilkan sinyal paket paling penting dengan lebih jelas.
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell className="px-1">
          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
            <div className="grid gap-6">
              <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                  <div className="space-y-5">
                    <div className="inline-flex w-fit items-center gap-2 rounded-radius-pill bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      Ringkasan utama
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-radius-lg border border-border bg-surface-subtle px-4 py-4">
                        <div className="text-sm text-muted">Harga paket</div>
                        <div className="mt-2 text-3xl font-bold leading-tight text-primary">
                          {pkg.priceMode === 'public' ? formatPrice(pkg.price) : 'Hubungi Admin'}
                        </div>
                        <div className="mt-2 text-sm leading-7 text-muted">
                          {pkg.minimumDeposit ? `DP minimum ${formatPrice(pkg.minimumDeposit)}` : 'Skema pembayaran dijelaskan saat konsultasi.'}
                        </div>
                      </div>
                      <div className={`rounded-radius-lg border px-4 py-4 ${seatState.className}`}>
                        <div className="text-sm font-semibold opacity-90">Status kursi</div>
                        <div className="mt-2 text-xl font-bold leading-snug">{seatState.label}</div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/70">
                          <div className={`h-full rounded-full ${seatState.barClassName}`} style={{ width: seatState.width }} />
                        </div>
                        <div className="mt-3 text-sm leading-7 opacity-90">{seatState.detail}</div>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-radius-lg border border-border bg-surface px-4 py-4 shadow-[var(--shadow-1)]">
                        <div className="text-sm text-muted">Tanggal berangkat</div>
                        <div className="mt-1 text-base font-semibold text-text">{pkg.departureDate ? formatDate(pkg.departureDate) : 'Jadwal menyusul'}</div>
                      </div>
                      <div className="rounded-radius-lg border border-border bg-surface px-4 py-4 shadow-[var(--shadow-1)]">
                        <div className="text-sm text-muted">Durasi</div>
                        <div className="mt-1 text-base font-semibold text-text">{pkg.durationDays} Hari</div>
                      </div>
                      <div className="rounded-radius-lg border border-border bg-surface px-4 py-4 shadow-[var(--shadow-1)]">
                        <div className="text-sm text-muted">Kota berangkat</div>
                        <div className="mt-1 text-base font-semibold text-text">{pkg.departureCity}</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
                    <div className="text-sm font-semibold text-white/72">Langkah berikutnya</div>
                    <div className="mt-3 text-2xl font-bold leading-snug">
                      {isSoldOut ? 'Jadwal ini penuh, tetapi konsultasi tetap terbuka.' : 'Jika paket ini terasa cocok, Anda bisa lanjut dengan tenang.'}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      {isSoldOut
                        ? 'Tim Mazaya dapat membantu mengecek paket serupa, jadwal terdekat, atau opsi keberangkatan lain yang masih tersedia.'
                        : 'Baca dulu detail fasilitas, persyaratan, dan catatan pembayaran. Setelah itu Anda bisa memilih daftar langsung atau bertanya via WhatsApp.'}
                    </p>
                    <div className="mt-6 grid gap-3">
                      {isSoldOut ? (
                        <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" fullWidth className="bg-white text-primary hover:bg-white/92">
                          Tanya Jadwal Lain
                        </Button>
                      ) : (
                        <Button href={`/daftar/${pkg.slug}`} fullWidth className="bg-white text-primary hover:bg-white/92 border-white">
                          Daftar Paket Ini
                        </Button>
                      )}
                      <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="ghost" fullWidth className="border border-white/20 text-white hover:bg-white/10">
                        Konsultasi WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </SectionShell>

              {(pkg.airline || pkg.makkahHotel || pkg.madinahHotel) ? (
                <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
                  <div className="space-y-5">
                    <div>
                      <div className="inline-flex w-fit items-center gap-2 rounded-radius-pill bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                        Fasilitas inti
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                      </div>
                      <h2 className="mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl">
                        Hotel dan maskapai ditampilkan lebih ringkas agar kualitas paket cepat terbaca.
                      </h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      {pkg.airline ? (
                        <div className="rounded-radius-card border border-border bg-surface-subtle p-5 shadow-[var(--shadow-1)]">
                          <div className="text-sm font-semibold text-primary">Maskapai</div>
                          <div className="mt-3 text-xl font-semibold leading-snug text-text">{pkg.airline}</div>
                          <p className="mt-2 text-sm leading-7 text-muted">
                            Informasi penerbangan ditampilkan sebagai bagian dari gambaran ritme perjalanan paket ini.
                          </p>
                        </div>
                      ) : null}
                      {pkg.makkahHotel ? (
                        <div className="rounded-radius-card border border-border bg-surface-subtle p-5 shadow-[var(--shadow-1)]">
                          <div className="text-sm font-semibold text-primary">Hotel Makkah</div>
                          <div className="mt-3 text-xl font-semibold leading-snug text-text">{pkg.makkahHotel}</div>
                          <p className="mt-2 text-sm leading-7 text-muted">
                            Diposisikan sebagai bagian penting dari kenyamanan jemaah selama fase ibadah di Makkah.
                          </p>
                        </div>
                      ) : null}
                      {pkg.madinahHotel ? (
                        <div className="rounded-radius-card border border-border bg-surface-subtle p-5 shadow-[var(--shadow-1)]">
                          <div className="text-sm font-semibold text-primary">Hotel Madinah</div>
                          <div className="mt-3 text-xl font-semibold leading-snug text-text">{pkg.madinahHotel}</div>
                          <p className="mt-2 text-sm leading-7 text-muted">
                            Membantu calon jemaah menilai kualitas penginapan secara lebih cepat tanpa membaca blok panjang.
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </SectionShell>
              ) : null}

              <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  {pkg.inclusions && pkg.inclusions.length > 0 ? (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-text">Harga termasuk</h2>
                      <ul className="grid gap-3 text-sm text-text-secondary">
                        {pkg.inclusions.map((item, index) => (
                          <li key={index} className="rounded-radius-lg border border-success/15 bg-success-soft/70 px-4 py-3 leading-7">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {pkg.exclusions && pkg.exclusions.length > 0 ? (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-text">Belum termasuk</h2>
                      <ul className="grid gap-3 text-sm text-text-secondary">
                        {pkg.exclusions.map((item, index) => (
                          <li key={index} className="rounded-radius-lg border border-border bg-surface-subtle px-4 py-3 leading-7">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </SectionShell>

              {(pkg.requirements && pkg.requirements.length > 0) || pkg.paymentNotes ? (
                <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
                  <div className="grid gap-8 lg:grid-cols-2">
                    {pkg.requirements && pkg.requirements.length > 0 ? (
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-text">Persyaratan dokumen</h2>
                        <ol className="grid gap-3 text-sm text-text-secondary">
                          {pkg.requirements.map((item, index) => (
                            <li key={index} className="rounded-radius-lg border border-border bg-surface-subtle px-4 py-3 leading-7">
                              <span className="mr-2 font-bold text-primary">{index + 1}.</span>
                              {item}
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : null}

                    {pkg.paymentNotes ? (
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-text">Catatan pembayaran</h2>
                        <div className="rounded-radius-card border border-primary/10 bg-primary-soft/50 px-5 py-5 text-sm leading-8 whitespace-pre-line text-text-secondary">
                          {pkg.paymentNotes}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </SectionShell>
              ) : null}

              {pkg.itinerarySummary ? (
                <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
                  <div className="space-y-4">
                    <div className="inline-flex w-fit items-center gap-2 rounded-radius-pill bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      Itinerary ringkas
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                    </div>
                    <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                      Gambaran perjalanan untuk membantu keluarga memahami ritme keberangkatan.
                    </h2>
                    <div className="rounded-radius-card border border-border bg-surface-subtle px-5 py-5 text-sm leading-8 whitespace-pre-line text-text-secondary">
                      {pkg.itinerarySummary}
                    </div>
                  </div>
                </SectionShell>
              ) : null}
            </div>

            <div className="grid gap-6">
              <SectionShell surface="card" className="px-6 py-6">
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-muted">Panduan membaca halaman ini</div>
                  <h2 className="text-2xl font-bold leading-tight text-text">
                    Fokus dulu pada jadwal, kursi, dan harga. Setelah itu nilai fasilitas dan kesiapan dokumen.
                  </h2>
                  <p className="text-sm leading-7 text-muted">
                    Pendekatan ini membantu keputusan terasa lebih objektif dan tidak terburu-buru, terutama bila paket sedang dibandingkan bersama keluarga.
                  </p>
                </div>
              </SectionShell>

              <SectionShell surface="primary" className="relative overflow-hidden px-6 py-6">
                <div className="absolute inset-y-0 right-0 hidden w-40 bg-[radial-gradient(circle_at_center,rgba(240,235,32,0.18),transparent_62%)] lg:block" />
                <div className="relative space-y-4">
                  <div className="inline-flex w-fit items-center gap-2 rounded-radius-pill border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                    Final CTA
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                  </div>
                  <h2 className="text-2xl font-bold leading-tight text-white">
                    {isSoldOut ? 'Butuh alternatif yang paling mendekati paket ini?' : 'Siap lanjut daftar atau ingin konsultasi lebih dulu?'}
                  </h2>
                  <p className="text-sm leading-7 text-white/78">
                    {isSoldOut
                      ? 'Ceritakan kebutuhan waktu berangkat, jumlah jemaah, dan kisaran budget agar tim Mazaya bisa membantu mencarikan opsi yang paling relevan.'
                      : 'Gunakan pendaftaran online bila sudah mantap. Jika masih ingin memastikan detail fasilitas atau dokumen, mulai dari WhatsApp juga tidak masalah.'}
                  </p>
                  <div className="grid gap-3">
                    {isSoldOut ? (
                      <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" fullWidth className="bg-white text-primary hover:bg-white/92">
                        WhatsApp Cari Alternatif
                      </Button>
                    ) : (
                      <Button href={`/daftar/${pkg.slug}`} fullWidth className="bg-white text-primary hover:bg-white/92 border-white">
                        Lanjut Pendaftaran
                      </Button>
                    )}
                    <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="ghost" fullWidth className="border border-white/20 text-white hover:bg-white/10">
                      Konsultasi WhatsApp
                    </Button>
                    <Button href="/paket-umrah" variant="ghost" fullWidth className="border border-white/10 text-white/88 hover:bg-white/8">
                      Lihat Paket Lain
                    </Button>
                  </div>
                </div>
              </SectionShell>
            </div>
          </div>
        </SectionShell>
      </div>
    </Container>
  )
}
