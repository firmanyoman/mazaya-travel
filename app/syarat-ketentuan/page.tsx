import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan - Mazaya Travel',
  description:
    'Baca syarat dan ketentuan dasar penggunaan website, konsultasi, dan pendaftaran awal paket Umrah bersama Mazaya Travel.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20bertanya%20tentang%20syarat%20dan%20ketentuan%20pendaftaran'

const termsSections = [
  {
    title: 'Ruang lingkup informasi',
    body:
      'Website ini disediakan untuk membantu calon jemaah dan keluarga memahami profil Mazaya Travel, melihat informasi paket, membaca legalitas dasar, dan memulai jalur konsultasi atau pendaftaran awal.',
  },
  {
    title: 'Sifat informasi paket',
    body:
      'Informasi harga, jadwal keberangkatan, ketersediaan seat, hotel, maskapai, dan fasilitas paket diupayakan akurat pada saat ditampilkan. Namun detail operasional dapat berubah menyesuaikan kebijakan vendor, maskapai, otoritas terkait, atau kebutuhan layanan.',
  },
  {
    title: 'Pendaftaran awal belum berarti keberangkatan final',
    body:
      'Pengiriman form pendaftaran melalui website diperlakukan sebagai pendaftaran awal dan pengumpulan data dasar. Status keberangkatan, konfirmasi seat, kelengkapan dokumen, dan tahapan administrasi lanjutan tetap mengikuti verifikasi tim Mazaya Travel.',
  },
  {
    title: 'Kewajiban data yang benar',
    body:
      'Calon jemaah bertanggung jawab memastikan data yang dikirim melalui form atau WhatsApp benar, aktif, dan milik pihak yang berwenang untuk mendaftar. Kesalahan data dapat memengaruhi proses tindak lanjut dan administrasi.',
  },
  {
    title: 'Penggunaan jalur konsultasi',
    body:
      'WhatsApp konsultasi digunakan untuk tanya jawab awal, klarifikasi paket, dan arahan langkah berikutnya. Jawaban tim akan mengikuti jam operasional dan antrean layanan yang sedang berjalan.',
  },
  {
    title: 'Privasi dan pembaruan kebijakan',
    body:
      'Penggunaan data pribadi mengikuti kebijakan privasi yang berlaku di website ini. Mazaya Travel dapat memperbarui isi halaman syarat dan ketentuan secara wajar bila ada perubahan alur layanan, kebijakan internal, atau kebutuhan kepatuhan.',
  },
]

const registrationNotes = [
  'Pastikan nomor WhatsApp aktif agar tim kami bisa menghubungi Anda kembali.',
  'Siapkan identitas dan dokumen dasar sebelum melanjutkan proses administrasi.',
  'Baca juga kebijakan privasi agar Anda memahami penggunaan data pada pendaftaran awal.',
]

export default function TermsPage() {
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

      <main className="mx-auto flex-1 w-full max-w-4xl space-y-8">
        <section className="rounded-radius-card border border-border bg-primary-soft/20 px-6 py-10 sm:px-10">
          <span className="inline-block rounded-radius-pill bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            Syarat & Ketentuan
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-text sm:text-4xl">
            Ketentuan Dasar Penggunaan Website dan Pendaftaran Awal Mazaya Travel
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            Halaman ini merangkum ketentuan dasar yang berlaku saat Anda memakai website Mazaya Travel,
            mengirim pertanyaan, atau memulai pendaftaran awal paket Umrah. Tujuannya agar informasi
            lebih jelas, tenang, dan mudah dipahami sejak awal.
          </p>
        </section>

        <section className="space-y-6">
          {termsSections.map((item) => (
            <article key={item.title} className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
              <h2 className="text-xl font-bold text-text">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-text">Sebelum melanjutkan pendaftaran</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {registrationNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/kebijakan-privasi" className="mt-5 inline-flex font-semibold text-primary hover:underline">
              Baca Kebijakan Privasi
            </Link>
          </article>
          <article className="rounded-radius-card border border-border bg-primary p-6 text-white shadow-sm">
            <h2 className="text-2xl font-extrabold">Siap lanjut lihat paket atau konsultasi?</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Setelah memahami ketentuan dasar ini, Anda bisa melanjutkan ke jalur pendaftaran atau
              menghubungi tim kami lewat WhatsApp resmi untuk pertanyaan paket.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/daftar"
                className="inline-flex items-center justify-center rounded-radius-control bg-white px-6 py-3 font-bold text-primary transition-opacity hover:opacity-90"
              >
                Daftar Sekarang
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
