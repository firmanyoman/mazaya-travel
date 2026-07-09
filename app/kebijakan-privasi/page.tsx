import type { Metadata } from 'next'
import {
  TrustCard,
  TrustChecklist,
  TrustCta,
  TrustHero,
  TrustPageLayout,
  TrustSection,
  TrustSplitPanel,
} from '@/components/trust/TrustPage'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi - Mazaya Travel',
  description:
    'Pelajari bagaimana Mazaya Travel mengumpulkan, menggunakan, dan menjaga data calon jamaah yang dikirim melalui form pendaftaran dan konsultasi.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20bertanya%20tentang%20kebijakan%20privasi'

const privacyPoints = [
  {
    title: 'Data yang kami kumpulkan',
    body:
      'Untuk launch saat ini, data yang dapat kami terima dari calon jamaah meliputi nama lengkap, nomor WhatsApp, NIK, nama ayah, jenis kelamin, tanggal lahir, kota domisili, pesan tambahan, serta file KTP bila diunggah melalui form pendaftaran.',
  },
  {
    title: 'Tujuan penggunaan data',
    body:
      'Data digunakan untuk memproses pendaftaran awal Umrah atau Haji, menghubungi calon jamaah untuk tindak lanjut, memverifikasi kebutuhan administrasi dasar, dan membantu tim internal menyiapkan layanan yang relevan dengan paket yang dipilih.',
  },
  {
    title: 'Persetujuan pengguna',
    body:
      'Sebelum mengirim form pendaftaran, pengguna diminta memberikan persetujuan bahwa data yang dimasukkan benar dan boleh digunakan oleh PT Mazaya Amanah Wisata untuk kebutuhan administrasi pendaftaran Umrah atau Haji.',
  },
  {
    title: 'Penyimpanan dan akses internal',
    body:
      'Data lead disimpan untuk kebutuhan tindak lanjut internal Mazaya Travel. Akses data dibatasi untuk keperluan operasional yang relevan, seperti follow up pendaftaran, verifikasi awal, dan koordinasi layanan calon jamaah.',
  },
  {
    title: 'Berbagi data',
    body:
      'Kami tidak menampilkan data pribadi calon jamaah sebagai konten publik. Bila pada tahap lanjutan dibutuhkan pihak pendukung proses layanan, pembagian data dilakukan seperlunya sesuai konteks operasional dan administrasi perjalanan ibadah.',
  },
  {
    title: 'Hak untuk menghubungi kami',
    body:
      'Jika Anda ingin menanyakan penggunaan data, memperbarui informasi kontak, atau meminta tindak lanjut terkait data yang sudah dikirim, silakan hubungi tim Mazaya Travel melalui WhatsApp resmi yang tercantum di website.',
  },
]

const privacyContext = [
  'Form pendaftaran meminta data identitas dasar dan persetujuan privasi sebelum submit.',
  'Nomor WhatsApp dipakai untuk koordinasi lanjutan dan arahan langkah berikutnya.',
  'File KTP, bila diunggah, diperlakukan sebagai data sensitif untuk kebutuhan administrasi awal.',
  'Halaman ini dapat berubah bila alur pengumpulan data atau operasional layanan berubah pada fase berikutnya.',
]

export default function PrivacyPolicyPage() {
  return (
    <TrustPageLayout>
      <TrustHero
        eyebrow="Privasi pengguna"
        title="Penjelasan privasi yang lebih rapi agar penggunaan data terasa jelas sejak awal."
        summary="Halaman ini menjelaskan praktik privasi pada website launch saat ini, terutama untuk data yang dikirim melalui form pendaftaran dan jalur konsultasi."
        stats={[
          { value: 'Seperlunya', label: 'Data dipakai sesuai konteks layanan dan pendaftaran' },
          { value: 'Internal', label: 'Akses dibatasi untuk kebutuhan operasional yang relevan' },
          { value: 'Terbuka', label: 'Pengguna tetap dapat menghubungi kami untuk klarifikasi' },
        ]}
        panelTitle="Ringkasan cepat"
        panelItems={[
          { label: 'Sumber data utama', value: 'Form pendaftaran dan jalur konsultasi' },
          { label: 'Penggunaan inti', value: 'Tindak lanjut pendaftaran dan administrasi awal' },
          { label: 'Akses internal', value: 'Dibatasi sesuai kebutuhan operasional' },
          { label: 'Kanal klarifikasi', value: 'WhatsApp resmi Mazaya Travel' },
        ]}
      />

      <TrustSection
        eyebrow="Pokok kebijakan"
        title="Poin privasi utama yang paling perlu dipahami sebelum mengirim data"
        summary="Struktur ini dibuat lebih mudah dipindai agar informasi penting terasa jelas, tidak berat, dan tidak membingungkan."
      >
        <div className="grid gap-4">
          {privacyPoints.map((item, index) => (
            <article key={item.title} className="rounded-radius-card border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <div className="grid gap-4 md:grid-cols-[auto_1fr] md:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-text">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </TrustSection>

      <TrustSection
        eyebrow="Konteks operasional"
        title="Bagaimana kebijakan ini diterapkan pada website launch saat ini"
        summary="Penjelasan tambahan ini membantu pengguna mengaitkan kebijakan privasi dengan alur nyata saat mereka mengirim data ke Mazaya."
      >
        <TrustSplitPanel
          left={
            <div className="rounded-radius-card border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <h3 className="text-2xl font-bold text-text">Konteks data saat ini</h3>
              <div className="mt-5">
                <TrustChecklist items={privacyContext} />
              </div>
            </div>
          }
          right={<TrustCard title="Butuh klarifikasi?" description="Jika ada pertanyaan soal penggunaan data pribadi atau proses pendaftaran, hubungi tim kami lewat WhatsApp resmi agar Anda mendapat penjelasan langsung." />}
        />
      </TrustSection>

      <TrustCta
        eyebrow="Klarifikasi privasi"
        title="Masih ada pertanyaan soal penggunaan data pribadi?"
        summary="Silakan hubungi tim Mazaya untuk meminta penjelasan langsung sebelum atau sesudah Anda mengirim data melalui website."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp konsultasi"
        secondaryHref="/daftar"
        secondaryLabel="Buka form pendaftaran"
      />
    </TrustPageLayout>
  )
}
