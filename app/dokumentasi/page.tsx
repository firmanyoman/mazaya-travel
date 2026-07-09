import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

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
            Dokumentasi Mazaya Travel
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-text sm:text-4xl">
            Dokumentasi Jamaah untuk Membantu Calon Jemaah dan Keluarga Lebih Yakin
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            Halaman ini menampilkan contoh dokumentasi publik yang membantu memperlihatkan suasana layanan, pendampingan, dan perjalanan jamaah secara lebih nyata. Untuk fase launch, kami memakai galeri statis yang tetap diarahkan untuk membangun trust dan mendorong langkah konsultasi berikutnya.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-radius-card border border-border bg-surface shadow-sm">
              <div className="relative h-64 w-full bg-primary-soft/30">
                <Image src={item.src} alt={item.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-primary">{item.meta}</p>
                <h2 className="mt-2 text-lg font-bold text-text">{item.title}</h2>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-text">Kenapa halaman ini penting?</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>Dokumentasi visual membantu calon jemaah melihat bukti aktivitas dan suasana layanan.</li>
              <li>Keluarga bisa memakai halaman ini sebagai referensi awal sebelum konsultasi lebih detail.</li>
              <li>Setelah cocok, langkah berikutnya dibuat singkat: lihat paket aktif atau chat WhatsApp.</li>
            </ul>
          </article>
          <article className="rounded-radius-card border border-border bg-primary p-6 text-white shadow-sm">
            <h2 className="text-2xl font-extrabold">Lanjut cek paket atau konsultasi</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Jika dokumentasi ini sudah memberi gambaran awal yang cukup, lanjutkan ke paket aktif atau hubungi tim Mazaya Travel untuk tanya jadwal, harga, dan langkah daftar.
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
