import type { Metadata } from 'next'
import Image from 'next/image'
import { ContentCta, ContentHero, ContentPageLayout, ContentSection } from '@/components/content/ContentPage'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Dokumentasi - Mazaya Travel',
  description:
    'Lihat dokumentasi kegiatan dan momen jamaah Mazaya Travel sebagai bukti visual layanan yang nyata dan terukur.',
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
    meta: 'Arab Saudi • Pendampingan amanah',
    src: '/assets/mazaya_travel_rebuild_inventory/assets/Biru_Hijau_Putih_Modern_Ibadah_Umroh_plus_Turki_Instagram_Story__12__png.png',
  },
  {
    title: 'Suasana perjalanan yang tertata dan nyaman',
    meta: 'Keberangkatan • Dukungan operasional',
    src: '/assets/mazaya_travel_rebuild_inventory/assets/1760146127_hero.jpeg',
  },
  {
    title: 'Dokumentasi jamaah untuk penguat kepercayaan keluarga',
    meta: 'Mazaya Travel • Publish-safe preview',
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
        title="Dokumentasi visual yang membantu keluarga melihat suasana layanan dan pendampingan secara lebih nyata."
        summary="Halaman ini menampilkan dokumentasi publik yang memberi gambaran tentang ritme perjalanan, kebersamaan jamaah, dan pendampingan tim tanpa perlu membaca penjelasan yang panjang lebih dulu."
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
          { value: `${galleryItems.length} momen`, label: 'Contoh dokumentasi publik yang membantu membangun konteks layanan' },
          { value: 'Trust visual', label: 'Dipakai sebagai penguat sebelum keluarga masuk ke tahap konsultasi' },
          { value: 'Tenang', label: 'Galeri dibuat rapi agar tidak terasa ramai atau membingungkan' },
        ]}
        panelTitle="Yang bisa dinilai di sini"
        panelItems={[
          { label: 'Suasana layanan', value: 'Bagaimana tim mendampingi dan menjaga ritme perjalanan' },
          { label: 'Bukti aktivitas', value: 'Galeri membantu memperlihatkan pengalaman yang lebih nyata' },
          { label: 'Langkah lanjut', value: 'Setelah cukup yakin, lanjutkan ke paket aktif atau konsultasi' },
        ]}
      />

      <ContentSection
        eyebrow="Galeri kepercayaan"
        title="Dokumentasi yang ditata seperti keluarga menilai bukti layanan, bukan sekadar melihat foto"
        summary="Setiap kartu menampilkan konteks singkat agar pengunjung cepat memahami mengapa momen tersebut relevan terhadap rasa aman dan kualitas pendampingan."
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
                'Membantu calon jemaah melihat bukti aktivitas dan suasana pendampingan secara visual.',
                'Memudahkan keluarga menilai trust sebelum masuk ke pembicaraan jadwal, harga, atau dokumen.',
                'Menjadi jembatan yang lebih halus menuju paket aktif dan konsultasi, tanpa mendorong terlalu cepat.',
              ].map((item) => (
                <div key={item} className="rounded-[16px] border border-border bg-surface px-4 py-4 text-sm leading-7 text-text-secondary">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[20px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
            <div className="text-sm font-semibold text-white/72">Setelah melihat dokumentasi</div>
            <h2 className="mt-3 text-2xl font-bold leading-snug">Lanjutkan ke langkah yang membantu keputusan terasa lebih jelas.</h2>
            <p className="mt-3 text-sm leading-7 text-white/78">
              Jika dokumentasi ini sudah memberi gambaran awal yang cukup, Anda bisa membuka paket aktif atau bertanya via WhatsApp untuk menyesuaikan jadwal dan kesiapan keluarga.
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
        eyebrow="Ruang tanya yang dekat"
        title="Butuh konteks lebih spesifik setelah melihat dokumentasi?"
        summary="Tim Mazaya dapat membantu menjelaskan paket yang aktif, ritme pendampingan, dan langkah daftar dengan bahasa yang mudah diikuti keluarga."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp konsultasi"
        secondaryHref="/paket-umrah"
        secondaryLabel="Lihat paket aktif"
      />
    </ContentPageLayout>
  )
}
