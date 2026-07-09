import type { Metadata } from 'next'
import { ContentCta, ContentHero, ContentPageLayout } from '@/components/content/ContentPage'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

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

const faqGroups = [
  {
    title: 'Trust & legalitas',
    items: faqs.slice(0, 1),
  },
  {
    title: 'Paket & harga',
    items: faqs.slice(1, 3).concat(faqs.slice(4, 6)),
  },
  {
    title: 'Dokumen & pendampingan',
    items: [faqs[3], faqs[6], faqs[7]],
  },
]

export default function FaqPage() {
  return (
    <ContentPageLayout>
      <ContentHero
        eyebrow="FAQ Mazaya"
        backHref="/"
        backLabel="Kembali ke Beranda"
        title="Jawaban yang lebih tenang, ringkas, dan mudah dipindai sebelum konsultasi atau pendaftaran."
        summary="FAQ ini disusun untuk meredakan pertanyaan awal yang paling sering muncul, dengan urutan baca yang lebih rapi agar pengunjung tidak merasa menelusuri blok teks yang melelahkan."
        actions={
          <>
            <Button href="/daftar" size="lg">
              Mulai pendaftaran
            </Button>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              WhatsApp konsultasi
            </Button>
          </>
        }
        metrics={[
          { value: `${faqs.length} jawaban`, label: 'Pertanyaan awal yang paling sering dicari calon jemaah' },
          { value: `${faqGroups.length} kelompok`, label: 'Disusun per tema agar lebih cepat menemukan konteks yang relevan' },
          { value: 'Ringkas', label: 'Nada jawaban dijaga tetap jelas dan tidak bertele-tele' },
        ]}
        panelTitle="Cara membaca FAQ"
        panelItems={[
          { label: 'Mulai dari', value: 'Kelompok pertanyaan yang paling dekat dengan kebutuhan Anda saat ini' },
          { label: 'Gunakan paket aktif', value: 'Saat butuh melihat jadwal, harga, atau seat secara langsung' },
          { label: 'Beralih ke WhatsApp', value: 'Jika jawaban umum belum cukup untuk situasi Anda' },
        ]}
      />

      <SectionShell className="px-1">
        <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <div className="grid gap-4 xl:sticky xl:top-6">
            <SectionShell surface="card" className="px-5 py-5 md:px-6 md:py-6">
              <div className="text-sm font-semibold text-primary">Topik utama</div>
              <div className="mt-4 grid gap-3">
                {faqGroups.map((group) => (
                  <div key={group.title} className="rounded-radius-lg border border-border bg-surface-subtle px-4 py-4">
                    <div className="text-base font-semibold text-text">{group.title}</div>
                    <div className="mt-1 text-sm leading-7 text-muted">{group.items.length} pertanyaan yang paling sering dipindai lebih dulu.</div>
                  </div>
                ))}
              </div>
            </SectionShell>
            <SectionShell surface="card" className="px-5 py-5 md:px-6 md:py-6">
              <div className="text-sm font-semibold text-primary">Butuh jawaban personal?</div>
              <p className="mt-3 text-sm leading-7 text-muted">
                FAQ membantu untuk konteks umum. Jika pertanyaan Anda terkait kondisi keluarga, waktu berangkat, atau kesiapan dokumen, WhatsApp biasanya lebih tepat.
              </p>
            </SectionShell>
          </div>

          <div className="grid gap-6">
            {faqGroups.map((group) => (
              <SectionShell key={group.title} surface="card" className="px-6 py-6 md:px-8 md:py-8">
                <div className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-bold text-text">{group.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-muted">Jawaban dibuat singkat agar lebih nyaman dibaca satu per satu di mobile.</p>
                  </div>
                  <div className="grid gap-4">
                    {group.items.map((item) => (
                      <details key={item.question} className="group rounded-radius-card border border-border bg-surface-subtle px-5 py-4 open:bg-surface open:shadow-[var(--shadow-1)]">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-text">
                          <span>{item.question}</span>
                          <span className="mt-1 text-primary transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-3 max-w-[70ch] text-sm leading-7 text-text-secondary">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </SectionShell>
            ))}
          </div>
        </div>
      </SectionShell>

      <ContentCta
        eyebrow="Masih ada yang ingin dipastikan?"
        title="Jika jawaban umum belum cukup, lanjutkan ke percakapan yang lebih spesifik."
        summary="Tim Mazaya dapat membantu menjelaskan paket, alur daftar, legalitas, atau dokumen sesuai kebutuhan Anda tanpa membuat keputusan terasa tergesa-gesa."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp konsultasi"
        secondaryHref="/daftar"
        secondaryLabel="Buka formulir daftar"
      />
    </ContentPageLayout>
  )
}
