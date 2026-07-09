import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

export const metadata: Metadata = {
  title: 'FAQ - Mazaya Travel',
  description:
    'Temukan jawaban ringkas seputar legalitas, harga, dokumen, seat, dan cara daftar Umrah di Mazaya Travel.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20bertanya%20lebih%20lanjut%20tentang%20paket%20dan%20pendaftaran'

const faqs = [
  {
    question: 'Apakah Mazaya Travel memiliki legalitas yang jelas?',
    answer:
      'Ya. Untuk launch saat ini, kami menampilkan ringkasan identitas PT Mazaya Amanah Wisata, status PPIU resmi Kemenag RI, dan NIB di halaman legalitas agar calon jemaah dan keluarga mudah melakukan verifikasi dasar.',
  },
  {
    question: 'Bagaimana cara melihat harga paket Umrah?',
    answer:
      'Harga paket dapat dilihat dari halaman paket aktif. Jika detail harga belum ditampilkan penuh atau Anda ingin menyesuaikan pilihan, tim Mazaya Travel siap menjelaskan melalui WhatsApp.',
  },
  {
    question: 'Bagaimana alur daftar di website ini?',
    answer:
      'Calon jemaah bisa melihat paket lebih dulu, lalu membuka form pendaftaran untuk mengirim data awal. Setelah itu tim akan menghubungi melalui WhatsApp untuk tindak lanjut dan arahan langkah berikutnya.',
  },
  {
    question: 'Dokumen apa yang biasanya disiapkan saat pendaftaran awal?',
    answer:
      'Untuk tahap awal, website meminta data identitas dasar dan dapat menerima upload KTP. Kebutuhan dokumen lanjutan akan dijelaskan tim sesuai paket dan tahap proses jamaah.',
  },
  {
    question: 'Keberangkatan umumnya dari kota mana?',
    answer:
      'Halaman paket menampilkan kota keberangkatan per paket. Untuk launch saat ini, konteks yang paling sering ditampilkan adalah keberangkatan melalui Makassar, tetapi tetap mengikuti detail pada paket aktif.',
  },
  {
    question: 'Apakah informasi sisa seat tersedia?',
    answer:
      'Ya. Jika data seat tersedia, halaman paket menampilkan sisa kursi agar calon jemaah bisa menilai urgensi pendaftaran. Bila belum tersedia, Anda bisa meminta konfirmasi langsung melalui WhatsApp.',
  },
  {
    question: 'Apakah ada pendampingan sebelum dan selama perjalanan?',
    answer:
      'Ya. Mazaya Travel menekankan pendampingan amanah sejak konsultasi, penjelasan paket, persiapan dokumen, hingga agenda keberangkatan dan perjalanan sesuai konteks layanan yang dipilih.',
  },
  {
    question: 'Kalau masih ragu, apakah bisa konsultasi dulu tanpa langsung daftar?',
    answer:
      'Bisa. WhatsApp konsultasi disiapkan untuk calon jemaah yang masih ingin tanya soal paket, proses, legalitas, atau kesiapan dokumen sebelum mengisi form pendaftaran.',
  },
]

export default function FaqPage() {
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
            FAQ Mazaya Travel
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-text sm:text-4xl">
            Pertanyaan yang Sering Ditanyakan Sebelum Konsultasi atau Daftar
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            FAQ ini dirancang untuk mengurangi keraguan awal calon jemaah baru. Jawaban dibuat singkat, mudah dipindai, dan tetap mengarahkan ke tindakan berikutnya bila butuh penjelasan lebih detail.
          </p>
        </section>

        <section className="space-y-4">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
              <h2 className="text-lg font-bold text-text">{item.question}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
            </article>
          ))}
        </section>

        <section className="rounded-radius-card border border-border bg-primary p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold">Masih ada pertanyaan spesifik?</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
            Bila jawaban di atas belum cukup, lanjutkan ke konsultasi WhatsApp atau langsung buka form pendaftaran untuk memulai proses dengan arahan tim Mazaya Travel.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
        </section>
      </main>
    </div>
  )
}
