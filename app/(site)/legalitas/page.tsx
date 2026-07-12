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
      'Nama resmi perusahaan yang menjadi dasar layanan Mazaya Travel dan dapat digunakan sebagai acuan pengecekan.',
    accent: '01',
  },
  {
    title: 'Izin PPIU Kemenag RI',
    type: 'Legalitas perjalanan ibadah Umrah',
    number: 'PPIU resmi Kemenag RI',
    summary:
      'Informasi penting yang biasanya ingin dipastikan calon jemaah sebelum membahas paket dan pembayaran.',
    accent: '02',
  },
  {
    title: 'Nomor Induk Berusaha',
    type: 'NIB',
    number: '13052200161160002',
    summary:
      'Data usaha yang kami tampilkan secara terbuka agar keluarga lebih mudah melakukan verifikasi dasar.',
    accent: '03',
  },
]

const verificationNotes = [
  'Legalitas membantu calon jemaah memastikan identitas perusahaan dan izin dasar ditampilkan secara terbuka.',
  'Halaman ini memudahkan keluarga melakukan pengecekan awal tanpa harus bertanya dari nol.',
  'Jika masih ingin memastikan lebih lanjut, tim Mazaya siap membantu lewat WhatsApp resmi atau kantor layanan di Bone.',
]

export default function LegalPage() {
  return (
    <TrustPageLayout>
      <TrustHero
        eyebrow="Legalitas Mazaya"
        title="Legalitas yang jelas membantu calon jemaah merasa lebih yakin sejak awal."
        summary="Kami menampilkan informasi legal utama agar Anda dan keluarga dapat melakukan pengecekan dasar sebelum melanjutkan ke paket atau konsultasi."
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
          { value: 'Transparan', label: 'Informasi legal utama ditampilkan dalam satu halaman' },
          { value: 'Resmi', label: 'Terhubung dengan identitas perusahaan yang jelas' },
          { value: 'Bone', label: 'Didukung kantor layanan yang bisa dikunjungi' },
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
        eyebrow="Legalitas utama"
        title="Informasi yang paling sering dicari keluarga sebelum memutuskan lanjut."
        summary="Kami menyusunnya secara ringkas agar mudah dibaca dan mudah dicocokkan saat Anda ingin melakukan verifikasi."
      >
        <TrustCardGrid columns="three">
          {legalDocuments.map((item) => (
            <article key={item.title} className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {item.accent}
              </div>
              <h3 className="text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
              <div className="mt-5 rounded-[16px] border border-border bg-surface-subtle p-4 text-sm text-text-secondary">
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
        eyebrow="Mengapa penting"
        title="Kepercayaan biasanya dimulai dari informasi legal yang bisa dicek dengan mudah."
        summary="Saat legalitas terasa jelas, calon jemaah biasanya lebih nyaman untuk melanjutkan ke pembahasan paket, jadwal, dan biaya."
      >
        <TrustSplitPanel
          left={
            <div className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <h3 className="text-2xl font-bold text-text">Catatan verifikasi</h3>
              <div className="mt-5">
                <TrustChecklist items={verificationNotes} />
              </div>
            </div>
          }
          right={
            <TrustCard
              title="Siap lanjut ke paket atau konsultasi"
              description="Setelah verifikasi dasar, Anda bisa melihat paket aktif atau langsung bertanya ke tim Mazaya melalui WhatsApp resmi."
            />
          }
        />
      </TrustSection>

      <TrustCta
        eyebrow="Langkah berikutnya"
        title="Setelah legalitas terasa jelas, lanjutkan ke paket atau konsultasi pribadi."
        summary="Tim Mazaya siap membantu menjelaskan jadwal, fasilitas, dan alur pendaftaran dengan bahasa yang mudah dipahami keluarga."
        primaryHref="/daftar"
        primaryLabel="Daftar sekarang"
        secondaryHref={whatsappUrl}
        secondaryLabel="WhatsApp konsultasi"
        secondaryExternal
      />
    </TrustPageLayout>
  )
}
