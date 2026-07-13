import type { Metadata } from 'next'
import { ContentCta, ContentHero, ContentPageLayout } from '@/components/content/ContentPage'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'FAQ Umrah | Jawaban Soal Harga, Dokumen, dan Daftar',
  description:
    'Lihat jawaban singkat tentang legalitas, harga paket, dokumen, ketersediaan kursi, dan cara daftar Umrah di Mazaya Travel.',
}
const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20bertanya%20lebih%20lanjut%20tentang%20paket%20dan%20pendaftaran'

const faqs = [
  {
    question: 'Apakah Mazaya Travel memiliki legalitas yang jelas?',
    answer:
      'Ya. Nama PT Mazaya Amanah Wisata, status PPIU resmi Kemenag RI, dan NIB tersedia untuk dicek keluarga sebelum memilih paket.',
  },
  {
    question: 'Bagaimana cara melihat harga paket Umrah?',
    answer:
      'Harga paket dapat dilihat di halaman paket aktif. Jika Anda ingin membandingkan pilihan, tim Mazaya siap membantu lewat WhatsApp.',
  },
  {
    question: 'Bagaimana alur daftar di website ini?',
    answer:
      'Anda bisa melihat paket lebih dulu, lalu mengisi formulir pendaftaran untuk mengirim data awal. Setelah itu tim Mazaya menghubungi Anda melalui WhatsApp.',
  },
  {
    question: 'Dokumen apa yang biasanya disiapkan saat pendaftaran awal?',
    answer:
      'Untuk tahap awal, Anda cukup menyiapkan data identitas dasar dan KTP. Dokumen lanjutan akan dijelaskan tim sesuai paket dan tahap proses keberangkatan.',
  },
  {
    question: 'Keberangkatan umumnya dari kota mana?',
    answer:
      'Kota keberangkatan tercantum di setiap paket. Banyak jadwal berangkat melalui Makassar, tetapi tetap mengikuti informasi terbaru pada paket yang Anda pilih.',
  },
  {
    question: 'Apakah informasi sisa seat tersedia?',
    answer:
      'Ya. Jika data seat tersedia, halaman paket menampilkan sisa kursi. Jika belum tampil, Anda dapat meminta konfirmasi langsung melalui WhatsApp resmi Mazaya.',
  },
  {
    question: 'Apakah ada pendampingan sebelum dan selama perjalanan?',
    answer:
      'Ya. Mazaya mendampingi calon jemaah mulai dari konsultasi, penjelasan paket, persiapan dokumen, manasik, hingga keberangkatan sesuai layanan yang dipilih.',
  },
  {
    question: 'Kalau masih ragu, apakah bisa konsultasi dulu tanpa langsung daftar?',
    answer:
      'Bisa. WhatsApp konsultasi tersedia untuk Anda yang masih ingin bertanya soal paket, proses, legalitas, atau kesiapan dokumen sebelum mengisi formulir.',
  },
]

const faqGroups = [
  {
    title: 'Legalitas',
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
        title="Jawaban singkat untuk pertanyaan yang paling sering diajukan calon jemaah."
        summary="Di sini kami merangkum hal-hal yang biasanya ingin diketahui lebih dulu sebelum seseorang menghubungi admin Mazaya."
        actions={
          <>
            <Button href="/daftar" size="lg">
              Lihat paket Umrah
            </Button>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              WhatsApp Konsultasi
            </Button>
          </>
        }
        metrics={[
          { value: `${faqs.length} jawaban`, label: 'Pertanyaan yang paling sering muncul sebelum mendaftar' },
          { value: `${faqGroups.length} kelompok`, label: 'Disusun supaya calon jemaah lebih cepat menemukan topik yang dicari' },
          { value: 'Ringkas', label: 'Jawaban singkat untuk hal-hal yang umum ditanyakan' },
        ]}
        panelTitle="Panduan singkat"
        panelItems={[
          { label: 'Mulai dari', value: 'Kelompok pertanyaan yang paling dekat dengan kebutuhan Anda' },
          { label: 'Lihat paket', value: 'Jika ingin memeriksa jadwal, harga, atau sisa seat' },
          { label: 'Hubungi admin', value: 'Jika pertanyaan Anda lebih spesifik atau menyangkut kondisi pribadi' },
        ]}
      />

      <SectionShell className="px-1">
        <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <div className="grid gap-4 xl:sticky xl:top-6">
            <SectionShell surface="card" className="px-5 py-5 md:px-6 md:py-6">
              <div className="text-sm font-semibold text-primary">Topik utama</div>
              <div className="mt-4 grid gap-3">
                {faqGroups.map((group) => (
                  <div key={group.title} className="rounded-[16px] border border-border bg-surface-subtle px-4 py-4">
                    <div className="text-base font-semibold text-text">{group.title}</div>
                    <div className="mt-1 text-sm leading-7 text-muted">{group.items.length} pertanyaan yang sering dibaca calon jemaah.</div>
                  </div>
                ))}
              </div>
            </SectionShell>
            <SectionShell surface="card" className="px-5 py-5 md:px-6 md:py-6">
              <div className="text-sm font-semibold text-primary">Masih ada pertanyaan lain?</div>
              <p className="mt-3 text-sm leading-7 text-muted">
                Jika pertanyaan Anda terkait kondisi keluarga, target keberangkatan, atau kesiapan dokumen, silakan lanjut bertanya lewat WhatsApp.
              </p>
            </SectionShell>
          </div>

          <div className="grid gap-6">
            {faqGroups.map((group) => (
              <SectionShell key={group.title} surface="card" className="px-6 py-6 md:px-8 md:py-8">
                <div className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-bold text-text">{group.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-muted">Jawaban kami tulis singkat agar mudah dibaca saat Anda membutuhkannya.</p>
                  </div>
                  <div className="grid gap-4">
                    {group.items.map((item) => (
                      <details key={item.question} className="group rounded-[20px] border border-border bg-surface-subtle px-5 py-4 open:bg-surface open:shadow-[var(--shadow-1)]">
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
        eyebrow="Masih ingin memastikan?"
        title="Jika jawaban umum belum cukup, silakan lanjut ke konsultasi pribadi."
        summary="Tim Mazaya siap membantu menjelaskan paket, legalitas, dokumen, dan alur daftar dengan bahasa yang sopan dan menenangkan."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp Konsultasi"
        secondaryHref="/daftar"
        secondaryLabel="Lihat paket Umrah"
      />
    </ContentPageLayout>
  )
}
