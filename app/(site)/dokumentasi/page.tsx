import type { Metadata } from 'next'
import Image from 'next/image'
import { ContentCta, ContentHero, ContentPageLayout, ContentSection } from '@/components/content/ContentPage'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Dokumentasi Jamaah | Kegiatan dan Pendampingan Mazaya',
  description:
    'Lihat dokumentasi kegiatan jamaah dan pendampingan tim Mazaya Travel sebagai gambaran suasana layanan sebelum Anda memilih paket.',
}
const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20tanya%20paket%20setelah%20melihat%20dokumentasi'

const galleryItems = [
  {
    title: 'Manasik dan briefing keberangkatan jamaah',
    meta: 'Bone • Persiapan keberangkatan',
    src: '/assets/mazaya_travel_rebuild_inventory/assets/1760146127_hero.jpeg',
  },
  {
    title: 'Kebersamaan jamaah di pelataran Masjidil Haram',
    meta: 'Makkah • Dokumentasi ibadah',
    src: '/assets/mazaya_travel_rebuild_inventory/assets/oktober_png.png',
  },
  {
    title: 'Pendampingan tim selama agenda perjalanan',
    meta: 'Madinah • Layanan lapangan',
    src: '/assets/mazaya_travel_rebuild_inventory/assets/brosur_desember_png.png',
  },
  {
    title: 'Momen jamaah bersama pembimbing',
    meta: 'Arab Saudi • Pendampingan jamaah',
    src: '/assets/mazaya_travel_rebuild_inventory/assets/Biru_Hijau_Putih_Modern_Ibadah_Umroh_plus_Turki_Instagram_Story__12__png.png',
  },
  {
    title: 'Suasana perjalanan jamaah selama program berlangsung',
    meta: 'Keberangkatan • Dukungan operasional',
    src: '/assets/mazaya_travel_rebuild_inventory/assets/1760146127_hero.jpeg',
  },
  {
    title: 'Dokumentasi kegiatan jamaah dan tim Mazaya',
    meta: 'Mazaya Travel • Aktivitas layanan',
    src: '/assets/mazaya_travel_rebuild_inventory/assets/oktober_png.png',
  },
]

export default function DocumentationPage() {
  return (
    <ContentPageLayout>
      <ContentHero
        eyebrow="Dokumentasi Mazaya"
        backHref="/"
        backLabel="Kembali ke Beranda"
        title="Dokumentasi yang membantu Anda melihat suasana layanan dan pendampingan jamaah."
        summary="Melalui halaman ini, Anda bisa mendapat gambaran tentang kegiatan manasik, kebersamaan jamaah, dan cara tim Mazaya mendampingi perjalanan ibadah."
        actions={
          <>
            <Button href="/paket-umrah" size="lg">
              Lihat paket Umrah
            </Button>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              WhatsApp konsultasi
            </Button>
          </>
        }
        metrics={[
          { value: `${galleryItems.length} momen`, label: 'Dokumentasi kegiatan jamaah dan pendampingan tim' },
          { value: 'Suasana nyata', label: 'Membantu keluarga melihat gambaran layanan di lapangan' },
          { value: 'Mudah dilihat', label: 'Bisa dibuka cepat saat berdiskusi bersama keluarga' },
        ]}
        panelTitle="Yang bisa Anda lihat di sini"
        panelItems={[
          { label: 'Kegiatan jamaah', value: 'Manasik, keberangkatan, dan momen selama perjalanan' },
          { label: 'Pendampingan tim', value: 'Cara Mazaya mendampingi jamaah di berbagai tahap perjalanan' },
          { label: 'Langkah lanjut', value: 'Setelah melihat dokumentasi, Anda bisa lanjut ke paket atau konsultasi' },
        ]}
      />

      <ContentSection
        eyebrow="Galeri kegiatan"
        title="Dokumentasi yang memberi gambaran lebih nyata tentang perjalanan bersama Mazaya."
        summary="Foto-foto ini membantu calon jemaah dan keluarga melihat suasana layanan sebelum melangkah ke tahap konsultasi atau pendaftaran."
      >
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[20px] border border-border bg-surface shadow-[var(--shadow-1)]">
              <div className="relative aspect-[4/3] w-full bg-primary-soft/30">
                <Image src={item.src} alt={item.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">{item.meta}</p>
                <h2 className="mt-2 text-lg font-semibold leading-snug text-text">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>

      <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="rounded-[20px] border border-border bg-surface-subtle p-6 shadow-[var(--shadow-1)]">
            <h2 className="text-2xl font-bold text-text">Mengapa dokumentasi ini penting?</h2>
            <div className="mt-5 grid gap-3">
              {[
                'Membantu calon jemaah melihat suasana pendampingan secara visual.',
                'Memberi gambaran awal kepada keluarga sebelum bertanya soal paket dan keberangkatan.',
                'Membantu Anda merasa lebih siap saat melanjutkan ke konsultasi atau pendaftaran.',
              ].map((item) => (
                <div key={item} className="rounded-[16px] border border-border bg-surface px-4 py-4 text-sm leading-7 text-text-secondary">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[20px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
            <div className="text-sm font-semibold text-white/72">Setelah melihat dokumentasi</div>
            <h2 className="mt-3 text-2xl font-bold leading-snug">Lanjutkan ke langkah yang paling membantu Anda mengambil keputusan.</h2>
            <p className="mt-3 text-sm leading-7 text-white/78">
              Jika dokumentasi ini sudah memberi gambaran yang cukup, Anda bisa melihat paket aktif atau langsung bertanya lewat WhatsApp untuk menyesuaikan jadwal dan kebutuhan keluarga.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button href="/paket-umrah" variant="secondary" fullWidth className="bg-white text-primary hover:bg-white/92 border-white">
                Lihat paket
              </Button>
              <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="ghost" fullWidth className="border border-white/20 text-white hover:bg-white/10">
                WhatsApp konsultasi
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      <ContentCta
        eyebrow="Lanjut bertanya"
        title="Butuh penjelasan lebih lanjut setelah melihat dokumentasi?"
        summary="Tim Mazaya siap membantu menjelaskan paket aktif, pendampingan yang tersedia, dan langkah daftar yang perlu Anda siapkan."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp konsultasi"
        secondaryHref="/paket-umrah"
        secondaryLabel="Lihat paket aktif"
      />
    </ContentPageLayout>
  )
}
