import type { Metadata } from 'next'
import Link from 'next/link'
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
    <TrustPageLayout>
      <TrustHero
        eyebrow="Syarat & ketentuan"
        title="Ketentuan dasar penggunaan website, konsultasi, dan pendaftaran awal paket Umrah & Haji."
        summary="Halaman ini menjelaskan aturan dasar saat Anda memakai website Mazaya Travel, bertanya melalui WhatsApp, atau mengirim data pendaftaran awal."
        stats={[
          { value: 'Website', label: 'Mencakup penggunaan informasi, konsultasi, dan pendaftaran awal' },
          { value: 'Pendaftaran', label: 'Form online adalah langkah awal sebelum verifikasi lanjutan' },
          { value: 'Privasi', label: 'Penggunaan data mengikuti kebijakan privasi Mazaya Travel' },
        ]}
        panelTitle="Ringkasan ketentuan"
        panelItems={[
          { label: 'Cakupan', value: 'Website, konsultasi, dan pendaftaran awal' },
          { label: 'Sifat pendaftaran', value: 'Pendaftaran awal, bukan konfirmasi final keberangkatan' },
          { label: 'Tanggung jawab pengguna', value: 'Memberikan data yang benar dan aktif' },
          { label: 'Kebijakan terkait', value: 'Mengikuti kebijakan privasi website' },
        ]}
      />

      <TrustSection
        eyebrow="Pokok ketentuan"
        title="Bagian penting yang sebaiknya dibaca sebelum Anda melanjutkan"
        summary="Poin-poin ini membantu Anda memahami batas informasi website, sifat pendaftaran awal, dan tanggung jawab data yang dikirim."
      >
        <div className="grid gap-4">
          {termsSections.map((item, index) => (
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
        eyebrow="Sebelum mendaftar"
        title="Beberapa hal yang sebaiknya disiapkan lebih dulu"
        summary="Checklist singkat ini membantu calon jemaah menyiapkan data dan memahami langkah awal sebelum proses administrasi berlanjut."
      >
        <TrustSplitPanel
          left={
            <div className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <h3 className="text-2xl font-bold text-text">Checklist pendaftaran awal</h3>
              <div className="mt-5">
                <TrustChecklist items={registrationNotes} />
              </div>
              <Link href="/kebijakan-privasi" className="mt-5 inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary-hover">
                Baca kebijakan privasi
              </Link>
            </div>
          }
          right={<TrustCard title="Lanjut dengan lebih mantap" description="Setelah memahami ketentuan dasar ini, Anda bisa lanjut ke jalur pendaftaran atau berkonsultasi lebih dulu agar kebutuhan paket dan dokumen terasa lebih jelas." />}
        />
      </TrustSection>

      <TrustCta
        eyebrow="Langkah berikutnya"
        title="Siap lanjut melihat paket atau berkonsultasi lebih dulu?"
        summary="Setelah memahami ketentuan dasar ini, Anda dapat melanjutkan dengan ritme yang nyaman sesuai kebutuhan keluarga dan kesiapan dokumen."
        primaryHref="/daftar"
        primaryLabel="Daftar sekarang"
        secondaryHref={whatsappUrl}
        secondaryLabel="WhatsApp konsultasi"
        secondaryExternal
      />
    </TrustPageLayout>
  )
}
