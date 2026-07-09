import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import {
  TrustCard,
  TrustCardGrid,
  TrustChecklist,
  TrustCta,
  TrustHero,
  TrustPageLayout,
  TrustSection,
  TrustSplitPanel,
} from '@/components/trust/TrustPage'

export const metadata: Metadata = {
  title: 'Legalitas - Mazaya Travel',
  description:
    'Lihat ringkasan legalitas Mazaya Travel dalam satu halaman untuk membantu calon jemaah dan keluarga melakukan verifikasi dasar.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20verifikasi%20legalitas%20dan%20paket'

const legalDocuments = [
  {
    title: 'Identitas perusahaan',
    type: 'Nama badan usaha',
    number: 'PT Mazaya Amanah Wisata',
    summary:
      'Nama resmi perusahaan yang menjadi dasar identitas publik dan operasional layanan Mazaya Travel.',
    accent: '01',
  },
  {
    title: 'Izin PPIU Kemenag RI',
    type: 'Legalitas perjalanan ibadah Umrah',
    number: 'PPIU resmi Kemenag RI',
    summary:
      'Fondasi legal utama yang relevan untuk kebutuhan verifikasi calon jemaah sebelum melangkah ke konsultasi paket.',
    accent: '02',
  },
  {
    title: 'Nomor Induk Berusaha',
    type: 'NIB',
    number: '13052200161160002',
    summary:
      'Identitas usaha yang kami tampilkan terbuka untuk memperkuat transparansi dan memudahkan pengecekan dasar.',
    accent: '03',
  },
]

const verificationNotes = [
  'Legalitas membantu calon jemaah menilai apakah identitas perusahaan dan izin dasar ditampilkan secara terbuka.',
  'Halaman ini disusun agar keluarga bisa melakukan cross-check awal tanpa harus mencari informasi di banyak tempat.',
  'Untuk pertanyaan lanjutan, tim Mazaya tetap tersedia lewat WhatsApp resmi dan kantor layanan di Bone.',
]

export default function LegalPage() {
  return (
    <TrustPageLayout>
      <TrustHero
        eyebrow="Legalitas Mazaya"
        title="Ringkasan legal yang lebih mudah dibaca, dicek, dan dipahami keluarga."
        summary="Halaman ini membantu calon jemaah melakukan verifikasi dasar dengan lebih tenang melalui informasi legal publik yang paling penting dan relevan."
        actions={
          <>
            <Button href="/daftar" size="lg">
              Lihat paket / daftar
            </Button>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              WhatsApp verifikasi
            </Button>
          </>
        }
        stats={[
          { value: 'Transparan', label: 'Informasi inti ditampilkan dalam satu halaman' },
          { value: 'Resmi', label: 'Mudah dikaitkan dengan identitas perusahaan' },
          { value: 'Bone', label: 'Didukung kantor layanan yang bisa diverifikasi' },
        ]}
        panelTitle="Data verifikasi cepat"
        panelItems={[
          { label: 'Perusahaan', value: 'PT Mazaya Amanah Wisata' },
          { label: 'Izin utama', value: 'PPIU resmi Kemenag RI' },
          { label: 'Nomor usaha', value: '13052200161160002' },
          { label: 'Lokasi layanan', value: 'Bone, Sulawesi Selatan' },
        ]}
      />

      <TrustSection
        eyebrow="Dokumen inti"
        title="Legalitas utama yang paling sering dibutuhkan untuk pengecekan awal"
        summary="Kami menampilkan ringkasan yang mudah dipindai agar calon jemaah tidak harus membaca penjelasan yang terlalu birokratis."
      >
        <TrustCardGrid columns="three">
          {legalDocuments.map((item) => (
            <article key={item.title} className="rounded-radius-card border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {item.accent}
              </div>
              <h3 className="text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
              <div className="mt-5 rounded-radius-lg border border-border bg-surface-subtle p-4 text-sm text-text-secondary">
                <div>
                  <div className="text-xs uppercase tracking-[0.12em] text-muted">Jenis legal</div>
                  <div className="mt-1 font-semibold text-text">{item.type}</div>
                </div>
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-[0.12em] text-muted">Nomor / identitas</div>
                  <div className="mt-1 font-semibold text-text">{item.number}</div>
                </div>
              </div>
            </article>
          ))}
        </TrustCardGrid>
      </TrustSection>

      <TrustSection
        eyebrow="Mengapa ini penting"
        title="Legalitas yang rapi membantu rasa aman hadir lebih awal"
        summary="Alih-alih menunggu pertanyaan muncul, halaman ini memberi konteks awal agar keputusan untuk lanjut konsultasi terasa lebih mantap."
      >
        <TrustSplitPanel
          left={
            <div className="rounded-radius-card border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <h3 className="text-2xl font-bold text-text">Catatan verifikasi</h3>
              <div className="mt-5">
                <TrustChecklist items={verificationNotes} />
              </div>
            </div>
          }
          right={
            <TrustCard
              title="Siap lanjut cek paket atau konsultasi"
              description="Setelah verifikasi dasar, Anda bisa langsung melihat paket aktif atau menghubungi tim kami lewat WhatsApp untuk pertanyaan lanjutan."
            />
          }
        />
      </TrustSection>

      <TrustCta
        eyebrow="Langkah berikutnya"
        title="Setelah legalitas terasa jelas, lanjutkan ke paket atau konsultasi pribadi."
        summary="Tim Mazaya siap membantu menjelaskan jadwal, fasilitas, dan alur pendaftaran dengan penjelasan yang rapi dan mudah dipahami."
        primaryHref="/daftar"
        primaryLabel="Daftar sekarang"
        secondaryHref={whatsappUrl}
        secondaryLabel="WhatsApp konsultasi"
        secondaryExternal
      />
    </TrustPageLayout>
  )
}
