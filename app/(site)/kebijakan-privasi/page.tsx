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
  title: 'Kebijakan Privasi | Data Pendaftaran dan Konsultasi',
  description:
    'Pelajari bagaimana Mazaya Travel mengumpulkan, menggunakan, dan menjaga data calon jemaah yang dikirim melalui formulir pendaftaran dan konsultasi.',
}
const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20bertanya%20tentang%20kebijakan%20privasi'

const privacyPoints = [
  {
    title: 'Data yang kami kumpulkan',
    body:
      'Data yang dapat kami terima dari calon jemaah meliputi nama lengkap, nomor WhatsApp, NIK, nama ayah, jenis kelamin, tanggal lahir, kota domisili, pesan tambahan, serta file KTP bila diunggah melalui form pendaftaran.',
  },
  {
    title: 'Tujuan penggunaan data',
    body:
      'Data digunakan untuk memproses pendaftaran awal Umrah atau Haji, menghubungi calon jamaah, memeriksa kebutuhan administrasi dasar, dan membantu tim internal menyiapkan layanan yang berkaitan dengan paket yang dipilih.',
  },
  {
    title: 'Persetujuan pengguna',
    body:
      'Sebelum mengirim form pendaftaran, pengguna diminta memberikan persetujuan bahwa data yang dimasukkan benar dan boleh digunakan oleh PT Mazaya Amanah Wisata untuk kebutuhan administrasi pendaftaran Umrah atau Haji.',
  },
  {
    title: 'Penyimpanan dan akses internal',
    body:
      'Data lead disimpan untuk kebutuhan internal Mazaya Travel. Akses data dibatasi untuk keperluan operasional yang relevan, seperti pemeriksaan pendaftaran awal dan koordinasi layanan calon jamaah.',
  },
  {
    title: 'Berbagi data',
    body:
      'Kami tidak menampilkan data pribadi calon jamaah sebagai konten publik. Bila pada tahap lanjutan dibutuhkan pihak pendukung proses layanan, pembagian data dilakukan seperlunya sesuai konteks operasional dan administrasi perjalanan ibadah.',
  },
  {
    title: 'Hak untuk menghubungi kami',
    body:
      'Jika Anda ingin menanyakan penggunaan data, memperbarui informasi kontak, atau memastikan data yang sudah dikirim, silakan hubungi tim Mazaya Travel melalui WhatsApp resmi yang tercantum di website.',
  },
]

const privacyContext = [
  'Form pendaftaran meminta data identitas dasar dan persetujuan privasi sebelum submit.',
  'Nomor WhatsApp dipakai untuk koordinasi lanjutan bila ada data yang perlu dipastikan.',
  'File KTP, bila diunggah, diperlakukan sebagai data sensitif untuk kebutuhan administrasi awal.',
  'Isi halaman ini dapat diperbarui bila ada perubahan pada alur pengumpulan data atau kebutuhan operasional layanan.',
]

export default function PrivacyPolicyPage() {
  return (
    <TrustPageLayout>
      <TrustHero
        eyebrow="Privasi pengguna"
        title="Penjelasan tentang bagaimana Mazaya menjaga data calon jemaah yang dikirim melalui website."
        summary="Di halaman ini, kami menjelaskan jenis data yang masuk, untuk apa data itu dipakai, dan siapa yang dapat membantu jika Anda ingin meminta penjelasan lebih lanjut."
        stats={[
          { value: 'Seperlunya', label: 'Data dipakai sesuai konteks layanan dan pendaftaran' },
          { value: 'Internal', label: 'Akses dibatasi untuk kebutuhan operasional yang relevan' },
          { value: 'Terbuka', label: 'Pengguna tetap dapat menghubungi kami untuk klarifikasi' },
        ]}
        panelTitle="Ringkasan cepat"
        panelItems={[
          { label: 'Sumber data utama', value: 'Form pendaftaran dan jalur konsultasi' },
          { label: 'Penggunaan inti', value: 'Pendaftaran awal dan pemeriksaan administrasi dasar' },
          { label: 'Akses internal', value: 'Dibatasi sesuai kebutuhan operasional' },
          { label: 'Kanal klarifikasi', value: 'WhatsApp resmi Mazaya Travel' },
        ]}
      />

      <TrustSection
        eyebrow="Pokok kebijakan"
        title="Hal-hal penting yang sebaiknya dibaca sebelum Anda mengirim data pribadi"
        summary="Poin-poin ini menjelaskan data apa yang kami terima, bagaimana data digunakan, dan ke mana Anda dapat bertanya bila ingin klarifikasi."
      >
        <div className="grid gap-4">
          {privacyPoints.map((item, index) => (
            <article key={item.title} className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
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
        title="Bagaimana kebijakan privasi ini diterapkan saat Anda memakai website Mazaya"
        summary="Penjelasan ini menghubungkan isi kebijakan privasi dengan proses nyata saat Anda mengisi form pendaftaran atau membuka konsultasi."
      >
        <TrustSplitPanel
          left={
            <div className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
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
        title="Jika masih ada pertanyaan soal penggunaan data pribadi, silakan hubungi kami."
        summary="Tim Mazaya siap menjelaskan hal-hal yang ingin Anda pastikan sebelum atau sesudah mengirim data melalui website."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp Konsultasi"
        secondaryHref="/daftar"
        secondaryLabel="Lihat form pendaftaran"
      />
    </TrustPageLayout>
  )
}
