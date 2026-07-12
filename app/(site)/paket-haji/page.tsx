import type { Metadata } from 'next'
import { ContentCta, ContentHero, ContentPageLayout, ContentSection } from '@/components/content/ContentPage'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'
import { getPackagesByCategory } from '@/app/lib/packages'

export const metadata: Metadata = {
  title: 'Paket Haji | Informasi Jadwal dan Konsultasi Awal',
  description:
    'Lihat informasi paket Haji Mazaya Travel untuk memahami jadwal, harga, fasilitas, dan langkah konsultasi awal sebelum menentukan pilihan.',
}
const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20paket%20Haji'

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

function getSeatState(remainingSeats: number | null, totalSeats: number | null, isSoldOut: boolean) {
  if (isSoldOut) {
    return {
      label: 'Kuota pada jadwal ini sudah habis',
      detail: 'Tim Mazaya tetap dapat membantu menjelaskan opsi jadwal atau langkah follow-up berikutnya.',
      className: 'border-danger/15 bg-danger-soft text-danger',
    }
  }

  if (!remainingSeats || !totalSeats) {
    return {
      label: 'Ketersediaan kursi perlu dikonfirmasi',
      detail: 'Silakan konsultasi untuk memeriksa seat terbaru dan kesiapan keberangkatan.',
      className: 'border-info/15 bg-info-soft text-info',
    }
  }

  return {
    label: `Sisa ${remainingSeats} dari ${totalSeats} kursi`,
    detail: 'Informasi kursi ditampilkan agar keluarga lebih mudah menilai urgensi pembahasan berikutnya.',
    className: remainingSeats / totalSeats <= 0.2
      ? 'border-warning/20 bg-warning-soft text-[#8A6911]'
      : 'border-success/20 bg-success-soft text-success',
  }
}

export default async function PaketHajiPage() {
  const packageList = await getPackagesByCategory('haji')

  const activeCount = packageList.filter((pkg) => pkg.packageStatus === 'active').length
  const departureCities = Array.from(new Set(packageList.map((pkg) => pkg.departureCity).filter(Boolean)))

  return (
    <ContentPageLayout>
      <ContentHero
        eyebrow="Paket Haji Mazaya"
        backHref="/"
        backLabel="Kembali ke Beranda"
        title="Informasi paket Haji untuk calon jemaah yang ingin memahami pilihan dengan lebih jelas."
        summary="Halaman ini membantu Anda melihat jadwal Haji, harga, durasi, dan ketersediaan kursi sebelum melanjutkan ke konsultasi atau pendaftaran."
        actions={
          <>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg">
              WhatsApp konsultasi
            </Button>
            <Button href="/daftar" variant="secondary" size="lg">
              Mulai pendaftaran
            </Button>
          </>
        }
        metrics={[
          { value: `${packageList.length} paket`, label: 'Jadwal Haji yang saat ini tampil di website' },
          { value: `${activeCount} aktif`, label: 'Paket yang masih bisa dipertimbangkan lebih lanjut' },
          { value: departureCities.length > 0 ? departureCities.join(', ') : 'Konfirmasi admin', label: 'Kota keberangkatan yang terdeteksi dari jadwal aktif' },
        ]}
        panelTitle="Panduan membaca halaman"
        panelItems={[
          { label: 'Lihat dulu', value: 'Jadwal, durasi, harga, dan kondisi kursi pada tiap paket' },
          { label: 'Bandingkan', value: 'Apakah ritme keberangkatan dan fasilitasnya sesuai kebutuhan keluarga' },
          { label: 'Konsultasi', value: 'Saat butuh klarifikasi seat, pembayaran, atau kesiapan dokumen' },
        ]}
      />

      {packageList.length > 0 ? (
        <>
          <ContentSection
            eyebrow="Paket Haji"
            title="Pilih paket Haji yang paling sesuai dengan jadwal, kebutuhan, dan kesiapan keluarga."
            summary="Setiap kartu menampilkan informasi penting yang biasanya ingin dipastikan lebih dulu sebelum mengambil keputusan."
          >
            <div className="grid gap-6 md:grid-cols-2">
              {packageList.map((pkg) => {
                const isSoldOut = pkg.packageStatus === 'sold_out' || (pkg.remainingSeats !== null && pkg.remainingSeats <= 0)
                const seatState = getSeatState(pkg.remainingSeats, pkg.totalSeats, isSoldOut)

                return (
                  <article key={pkg.id} className="flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-surface shadow-[var(--shadow-2)]">
                    <div className="border-b border-border bg-primary px-6 py-5 text-white">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-white/92 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                          {pkg.badgeText || 'Paket Haji'}
                        </span>
                        {pkg.tier ? (
                          <span className="rounded-full bg-brand-yellow/85 px-3 py-1 text-xs font-bold text-text">
                            {pkg.tier} Class
                          </span>
                        ) : null}
                        <span className={isSoldOut
                          ? 'rounded-full border border-white/12 bg-danger px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white'
                          : 'rounded-full border border-white/12 bg-white/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white'}>
                          {isSoldOut ? 'Sold out' : 'Tersedia'}
                        </span>
                      </div>
                      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/72">
                        <span>{formatDate(pkg.departureDate)}</span>
                        <span className="h-1 w-1 rounded-full bg-brand-yellow" />
                        <span>{pkg.durationDays} hari</span>
                        <span className="h-1 w-1 rounded-full bg-brand-yellow" />
                        <span>{pkg.departureCity}</span>
                      </div>
                      <h2 className="mt-3 text-2xl font-bold leading-snug text-white">{pkg.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-white/78">{pkg.packageSummary}</p>
                    </div>

                    <div className="flex h-full flex-col gap-5 p-6">
                      <div className="grid gap-3 rounded-[16px] border border-border bg-surface-subtle p-4 text-sm text-text-secondary">
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-muted">Harga paket</span>
                          <span className="text-right text-lg font-bold text-primary">
                            {pkg.priceMode === 'public' ? formatCurrency(pkg.price) : 'Hubungi Admin'}
                          </span>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-muted">DP minimum</span>
                          <span className="text-right font-semibold text-text">
                            {pkg.minimumDeposit ? formatCurrency(pkg.minimumDeposit) : 'Konsultasikan dulu'}
                          </span>
                        </div>
                        <div className="border-t border-border pt-3 leading-7 text-text">
                          {[pkg.airline, pkg.makkahHotel, pkg.madinahHotel].filter(Boolean).join(' • ') || 'Fasilitas utama dijelaskan saat konsultasi atau pada detail paket.'}
                        </div>
                      </div>

                      <div className={`rounded-[16px] border px-4 py-4 ${seatState.className}`}>
                        <div className="text-sm font-semibold">Kondisi kursi</div>
                        <div className="mt-2 text-base font-bold leading-snug">{seatState.label}</div>
                        <p className="mt-3 text-sm leading-7 opacity-90">{seatState.detail}</p>
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
          </ContentSection>

          <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Info inti langsung terlihat',
                  description: 'Jadwal, durasi, harga, dan kursi ditampilkan agar keluarga lebih cepat memahami pilihan yang tersedia.',
                },
                {
                  title: 'Memudahkan diskusi keluarga',
                  description: 'Setiap paket diringkas agar lebih mudah dibandingkan sebelum melangkah ke tahap berikutnya.',
                },
                {
                  title: 'Bisa lanjut konsultasi kapan saja',
                  description: 'Saat Anda butuh penjelasan tambahan, WhatsApp dan pendaftaran tetap tersedia di halaman yang sama.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[16px] border border-border bg-surface-subtle px-5 py-5">
                  <div className="text-lg font-semibold text-text">{item.title}</div>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </SectionShell>
        </>
      ) : (
        <SectionShell surface="card" className="px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-warning-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8A6911]">
                Jadwal sedang diperbarui
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                Belum ada paket Haji aktif yang ditampilkan saat ini.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted">
                Jika jadwal belum tampil, Anda tetap bisa bertanya kepada tim Mazaya untuk mengetahui perkiraan keberangkatan, opsi yang sedang disiapkan, dan langkah awal yang perlu dilakukan.
              </p>
              <div className="grid gap-3 text-sm leading-7 text-text-secondary sm:grid-cols-3">
                {[
                  'Siapkan nama lengkap dan nomor WhatsApp aktif untuk konsultasi awal.',
                  'Tanyakan estimasi jadwal, skema pembayaran, dan dokumen yang biasanya disiapkan lebih dulu.',
                  'Gunakan WhatsApp untuk respons tercepat dari tim Mazaya mengenai paket Haji.',
                ].map((item) => (
                  <div key={item} className="rounded-[16px] border border-border bg-surface-subtle px-4 py-4">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[20px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
              <div className="text-sm font-semibold text-white/72">Lanjut dari sini</div>
              <h2 className="mt-3 text-2xl font-bold leading-snug">Tim Mazaya siap membantu memetakan langkah berikutnya.</h2>
              <p className="mt-3 text-sm leading-7 text-white/78">
                Konsultasi dapat dipakai untuk menanyakan apakah sudah ada jadwal yang layak dipertimbangkan atau kapan sebaiknya follow-up kembali.
              </p>
              <div className="mt-6 grid gap-3">
                <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" fullWidth className="bg-white text-primary hover:bg-white/92 border-white">
                  WhatsApp konsultasi
                </Button>
                <Button href="/kontak" variant="ghost" fullWidth className="border border-white/20 text-white hover:bg-white/10">
                  Lihat kontak lengkap
                </Button>
              </div>
            </div>
          </div>
        </SectionShell>
      )}

      <ContentCta
        eyebrow="Konsultasi Haji"
        title="Masih menunggu kepastian jadwal atau ingin bertanya lebih dulu?"
        summary="Tim Mazaya siap membantu menjelaskan pilihan Haji yang tersedia, dokumen yang perlu disiapkan, dan langkah berikutnya sesuai kebutuhan Anda."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp konsultasi"
        secondaryHref="/daftar"
        secondaryLabel="Buka pendaftaran"
      />
    </ContentPageLayout>
  )
}
