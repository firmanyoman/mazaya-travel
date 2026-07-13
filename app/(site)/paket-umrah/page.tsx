import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'
import { getPackagesByCategory } from '@/app/lib/packages'

export const metadata: Metadata = {
  title: 'Paket Umrah | Jadwal, Harga, dan Kursi Tersedia',
  description:
    'Lihat paket Umrah Mazaya Travel berdasarkan jadwal keberangkatan, harga, durasi, fasilitas, dan ketersediaan kursi sebelum Anda mendaftar.',
}
const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20paket%20Umrah'

function formatCurrency(price: number | null) {
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
      label: 'Kursi pada keberangkatan ini sudah habis',
      detail: 'Tim Mazaya tetap bisa membantu mencarikan jadwal terdekat lain yang serupa.',
      className: 'border-danger/15 bg-danger-soft text-danger',
      barClassName: 'bg-danger',
      width: '100%',
    }
  }

  if (!remainingSeats || !totalSeats) {
    return {
      label: 'Ketersediaan kursi perlu dikonfirmasi',
      detail: 'Silakan konsultasi agar tim kami membantu cek seat dan kesiapan keberangkatan.',
      className: 'border-info/15 bg-info-soft text-info',
      barClassName: 'bg-info',
      width: '42%',
    }
  }

  const percentage = Math.max(0, Math.min(100, Math.round((remainingSeats / totalSeats) * 100)))

  if (percentage <= 20) {
    return {
      label: `Sisa ${remainingSeats} dari ${totalSeats} kursi`,
      detail: 'Cocok untuk segera didiskusikan bersama keluarga sebelum kuota semakin terbatas.',
      className: 'border-warning/20 bg-warning-soft text-[#8A6911]',
      barClassName: 'bg-warning',
      width: `${percentage}%`,
    }
  }

  return {
    label: `Sisa ${remainingSeats} dari ${totalSeats} kursi`,
    detail: 'Ketersediaan masih cukup nyaman untuk dipertimbangkan.',
    className: 'border-success/20 bg-success-soft text-success',
    barClassName: 'bg-success',
    width: `${percentage}%`,
  }
}

export default async function PaketUmrahPage() {
  const packageList = await getPackagesByCategory('umrah')

  const activeCount = packageList.filter((pkg) => pkg.packageStatus === 'active').length
  const soldOutCount = packageList.filter(
    (pkg) => pkg.packageStatus === 'sold_out' || (pkg.remainingSeats !== null && pkg.remainingSeats <= 0)
  ).length
  const departureCities = Array.from(new Set(packageList.map((pkg) => pkg.departureCity).filter(Boolean)))

  return (
    <Container className="pb-12 pt-4 md:pt-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <SectionShell surface="card" className="relative overflow-hidden px-6 py-8 md:px-8 lg:px-12 lg:py-12">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(97,199,195,0.22),transparent_56%)]" />
          <div className="absolute right-8 top-8 hidden h-16 w-16 rounded-full bg-brand-yellow/20 blur-2xl lg:block" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <div>
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover">
                  <span aria-hidden="true">←</span>
                  Kembali ke Beranda
                </Link>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-primary-soft px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                Paket Umrah Mazaya
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              </div>
              <div className="space-y-4">
                <p className="max-w-xl text-sm font-semibold text-text-secondary">
                  Lihat paket Umrah berdasarkan jadwal keberangkatan, fasilitas, harga, dan ketersediaan kursi.
                </p>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-[56px] lg:leading-[1.14]">
                  Pilih paket Umrah yang terasa paling cocok dengan rencana keberangkatan Anda dan keluarga.
                </h1>
                <p className="max-w-2xl text-[17px] leading-8 text-muted lg:text-lg">
                  Mazaya menampilkan informasi penting setiap paket agar calon jemaah dan keluarga dapat membacanya lebih dulu sebelum mendaftar atau bertanya lebih lanjut.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/daftar" size="lg" className="sm:min-w-48">
                  Lihat form pendaftaran
                </Button>
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  className="sm:min-w-48"
                >
                  WhatsApp Konsultasi
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[20px] border border-border bg-surface p-5 shadow-[var(--shadow-2)]">
                <div className="text-sm font-semibold text-muted">Ringkasan paket</div>
                <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
                  <div>
                    <div className="text-2xl font-bold text-primary">{packageList.length}</div>
                    <div className="text-sm text-muted">Paket tampil</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{activeCount}</div>
                    <div className="text-sm text-muted">Masih tersedia</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{soldOutCount}</div>
                    <div className="text-sm text-muted">Sold out</div>
                  </div>
                </div>
                <div className="mt-5 rounded-[16px] bg-surface-subtle px-4 py-3 text-sm leading-7 text-text-secondary">
                  Silakan mulai dari jadwal keberangkatan, harga, dan sisa kursi. Setelah itu, lihat fasilitas yang paling dekat dengan kebutuhan perjalanan Anda.
                </div>
              </div>
              <div className="rounded-[20px] border border-primary/10 bg-primary p-5 text-white shadow-[var(--shadow-2)]">
                <div className="text-sm font-semibold text-white/72">Panduan memilih paket</div>
                <div className="mt-3 text-xl font-bold leading-snug">
                  Pilih paket yang paling dekat dengan waktu berangkat, kenyamanan perjalanan, dan kesiapan keluarga.
                </div>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  {departureCities.length > 0
                    ? `Saat ini tersedia keberangkatan dari ${departureCities.join(', ')}. Jika masih ada yang ingin dipastikan soal jadwal atau dokumen, tim Mazaya siap membantu.`
                    : 'Jika masih ada yang ingin dipastikan soal jadwal atau dokumen, tim Mazaya siap membantu.'}
                </p>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell surface="card" className="px-5 py-5 md:px-6 md:py-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {[
              {
                value: 'Info pokok tersedia',
                label: 'Jadwal, kota berangkat, harga, dan sisa kursi bisa dibaca sebelum keluarga bertanya lebih jauh.',
              },
              {
                value: 'Bisa dilihat berdampingan',
                label: 'Setiap paket diringkas agar perbedaan fasilitas dan biaya tidak perlu dicari terlalu jauh.',
              },
              {
                value: 'Status kursi tegas',
                label: 'Sisa kursi dibuat jelas agar calon jemaah tidak salah memperkirakan peluang berangkat.',
              },
              {
                value: 'Tim siap membantu',
                label: 'Jika masih ada yang ingin ditanyakan, Anda dapat langsung menghubungi tim Mazaya.',
              },
            ].map((item) => (
              <div key={item.value} className="rounded-[16px] border border-border/80 bg-surface-subtle px-4 py-4">
                <div className="text-lg font-bold text-primary">{item.value}</div>
                <div className="mt-1 text-sm leading-7 text-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </SectionShell>

        {packageList.length > 0 ? (
          <SectionShell className="px-1">
            <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  Daftar paket Umrah
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                </div>
                <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                  Lihat paket yang tersedia, lalu pilih yang terasa paling dekat dengan rencana Anda.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-muted">
                  Setiap kartu memuat jadwal, durasi, harga, fasilitas, dan kondisi kursi agar dapat dibaca lebih dulu bersama keluarga.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {packageList.map((pkg) => {
                const isSoldOut = pkg.packageStatus === 'sold_out' || (pkg.remainingSeats !== null && pkg.remainingSeats <= 0)
                const seatState = getSeatState(pkg.remainingSeats, pkg.totalSeats, isSoldOut)
                const priceLabel = pkg.priceMode === 'public' ? formatCurrency(pkg.price) : 'Hubungi Admin'
                const facilitySummary = [pkg.airline, pkg.makkahHotel, pkg.madinahHotel].filter(Boolean)

                return (
                  <article key={pkg.id} className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-surface shadow-[var(--shadow-2)] transition-transform duration-150 hover:-translate-y-1">
                    <div className="relative overflow-hidden border-b border-border bg-primary px-6 py-5 text-white">
                      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_left,rgba(97,199,195,0.32),transparent_58%)]" />
                      <div className="relative flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-white/92 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                          {pkg.badgeText || 'Paket Umrah'}
                        </span>
                        {pkg.tier ? (
                          <span className="rounded-full bg-brand-yellow/85 px-3 py-1 text-xs font-bold text-text">
                            {pkg.tier} Class
                          </span>
                        ) : null}
                        <span
                          className={isSoldOut
                            ? 'rounded-full border border-white/10 bg-danger px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white'
                            : 'rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white'}
                        >
                          {isSoldOut ? 'Sold out' : 'Tersedia'}
                        </span>
                      </div>
                      <div className="relative mt-5 space-y-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/72">
                          <span>{formatDate(pkg.departureDate)}</span>
                          <span className="h-1 w-1 rounded-full bg-brand-yellow" />
                          <span>{pkg.durationDays} hari</span>
                          <span className="h-1 w-1 rounded-full bg-brand-yellow" />
                          <span>{pkg.departureCity}</span>
                        </div>
                        <Link href={`/paket/${pkg.slug}`} className="block transition-colors hover:text-brand-yellow">
                          <h3 className="text-2xl font-bold leading-snug text-white line-clamp-2">{pkg.title}</h3>
                        </Link>
                        <p className="text-sm leading-7 text-white/78">{pkg.packageSummary}</p>
                      </div>
                    </div>

                    <div className="flex h-full flex-col gap-5 p-6">
                      <div className="grid gap-3 rounded-[16px] border border-border bg-surface-subtle p-4 text-sm text-text-secondary">
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-muted">Harga paket</span>
                          <span className="text-right text-lg font-bold text-primary">{priceLabel}</span>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-muted">DP minimum</span>
                          <span className="text-right font-semibold text-text">
                            {pkg.minimumDeposit ? formatCurrency(pkg.minimumDeposit) : 'Konsultasikan dulu'}
                          </span>
                        </div>
                        {facilitySummary.length > 0 ? (
                          <div className="border-t border-border pt-3">
                            <div className="text-muted">Ringkasan fasilitas</div>
                            <div className="mt-1 leading-7 text-text">{facilitySummary.join(' • ')}</div>
                          </div>
                        ) : null}
                      </div>

                      <div className={`rounded-[16px] border px-4 py-4 ${seatState.className}`}>
                        <div className="flex items-center justify-between gap-3 text-sm font-semibold">
                          <span>Kondisi kursi</span>
                          <span>{seatState.label}</span>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/70">
                          <div className={`h-full rounded-full ${seatState.barClassName}`} style={{ width: seatState.width }} />
                        </div>
                        <p className="mt-3 text-sm leading-6 opacity-90">{seatState.detail}</p>
                      </div>

                      <div className="mt-auto grid gap-3 sm:grid-cols-2">
                        <Button href={`/paket/${pkg.slug}`} variant="secondary" fullWidth>
                          Lihat detail
                        </Button>
                        {isSoldOut ? (
                          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" fullWidth>
                            Tanya jadwal lain
                          </Button>
                        ) : (
                          <Button href={`/daftar/${pkg.slug}`} fullWidth>
                            Daftar paket
                          </Button>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </SectionShell>
        ) : (
          <SectionShell surface="card" className="px-6 py-8 md:px-8 md:py-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-4">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-warning-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8A6911]">
                  Jadwal sedang diperbarui
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                </div>
                <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                  Belum ada paket Umrah yang aktif untuk ditampilkan saat ini.
                </h2>
                <p className="max-w-3xl text-base leading-8 text-muted">
                  Jadwal baru mungkin sedang disiapkan atau dalam proses pembaruan. Agar tetap mendapat arahan tercepat, silakan konsultasi dulu untuk estimasi keberangkatan, pilihan paket serupa, dan langkah awal pendaftaran.
                </p>
              </div>
              <div className="grid gap-3 sm:min-w-64">
                <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" fullWidth>
                  WhatsApp Konsultasi
                </Button>
                <Button href="/kontak" variant="secondary" fullWidth>
                  Lihat Kontak Lengkap
                </Button>
              </div>
            </div>
          </SectionShell>
        )}

        <SectionShell surface="primary" className="relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12">
          <div className="absolute inset-y-0 right-0 hidden w-56 bg-[radial-gradient(circle_at_center,rgba(240,235,32,0.18),transparent_62%)] lg:block" />
          <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                Konsultasi yang menenangkan
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Jika masih ingin memastikan jadwal atau dokumen, silakan hubungi kami.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/78">
                Anda dapat mulai dari percakapan singkat lebih dulu. Tim Mazaya akan membantu menjelaskan pilihan yang tersedia dengan sabar.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:justify-items-end">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="w-full border-white/20 bg-white text-primary hover:bg-white/92 lg:max-w-72"
              >
                WhatsApp Konsultasi
              </Button>
              <Button href="/daftar" variant="ghost" size="lg" className="w-full border border-white/20 text-white hover:bg-white/10 lg:max-w-72">
                Lihat form pendaftaran
              </Button>
            </div>
          </div>
        </SectionShell>
      </div>
    </Container>
  )
}
