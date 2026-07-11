import type { Metadata } from 'next'
import { ContentCta, ContentHero, ContentPageLayout, ContentSection } from '@/components/content/ContentPage'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Testimoni - Mazaya Travel',
  description:
    'Baca testimoni jamaah Mazaya Travel untuk melihat pengalaman layanan, pendampingan, dan rasa aman sebelum berangkat.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20setelah%20membaca%20testimoni'

const testimonials = [
  {
    name: 'Ibu Rahmawati',
    city: 'Bone',
    quote:
      'Dari awal tanya sampai berangkat, penjelasan Mazaya Travel terasa rapi dan menenangkan. Keluarga juga lebih yakin karena legalitas dan alur keberangkatannya jelas.',
  },
  {
    name: 'Bapak Syamsuddin',
    city: 'Watampone',
    quote:
      'Yang paling membantu adalah pendampingannya. Saat persiapan dokumen dan manasik, kami tidak merasa bingung karena tim cepat merespons dan bahasanya mudah dipahami.',
  },
  {
    name: 'Ibu Nurhayati',
    city: 'Bone',
    quote:
      'Kami mencari travel yang bisa dipercaya dan dekat untuk konsultasi. Mazaya Travel memberi rasa aman karena komunikasinya jelas dan prosesnya terasa tertata.',
  },
  {
    name: 'Bapak Mulyadi',
    city: 'Sinjai',
    quote:
      'Testimoni saya sederhana: layanan terasa amanah. Jadwal, kebutuhan dokumen, dan arahan keberangkatan disampaikan tanpa membuat jamaah panik.',
  },
]

export default function TestimonialsPage() {
  return (
    <ContentPageLayout>
      <ContentHero
        eyebrow="Suara Jamaah"
        backHref="/"
        backLabel="Kembali ke Beranda"
        title="Pengalaman jamaah yang membantu calon jemaah menilai rasa aman, kejelasan, dan pendampingan Mazaya."
        summary="Testimoni dihadirkan sebagai lapisan trust yang lebih manusiawi. Fokusnya bukan pujian berlebihan, tetapi sinyal pengalaman yang paling sering dicari keluarga sebelum mengambil keputusan."
        actions={
          <>
            <Button href="/paket-umrah" size="lg">
              Lihat paket Umrah
            </Button>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              WhatsApp konsultasi
            </Button>
          </>
        }
        metrics={[
          { value: `${testimonials.length} testimoni`, label: 'Pengalaman ringkas yang fokus pada kualitas layanan dan rasa aman' },
          { value: 'Pendampingan', label: 'Tema yang paling sering muncul dari cerita jamaah' },
          { value: 'Bone & sekitar', label: 'Tetap dekat dengan konteks lokal calon jemaah Mazaya' },
        ]}
        panelTitle="Apa yang biasanya dicari"
        panelItems={[
          { label: 'Sebelum daftar', value: 'Apakah komunikasi terasa jelas dan tidak membingungkan' },
          { label: 'Selama proses', value: 'Apakah tim membantu dokumen, manasik, dan keberangkatan dengan rapi' },
          { label: 'Untuk keluarga', value: 'Apakah trust terasa cukup kuat sebelum membahas pembayaran' },
        ]}
      />

      <ContentSection
        eyebrow="Cerita pengalaman"
        title="Testimoni yang lebih mudah dipindai untuk melihat pola kualitas layanan"
        summary="Setiap kartu menonjolkan suara jamaah secara sederhana agar pembaca cepat menangkap hal yang paling berulang: amanah, kejelasan, dan pendampingan."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <article key={item.name + item.city} className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-text">{item.name}</h2>
                  <p className="text-sm text-muted">Jamaah Mazaya Travel • {item.city}</p>
                </div>
              </div>
              <p className="mt-5 text-base leading-8 text-text-secondary">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[20px] border border-border bg-surface-subtle p-6 shadow-[var(--shadow-1)]">
            <h2 className="text-2xl font-bold text-text">Pola yang paling sering muncul</h2>
            <div className="mt-5 grid gap-3">
              {[
                'Kejelasan komunikasi sebelum daftar dan menjelang keberangkatan.',
                'Rasa aman keluarga saat memverifikasi travel dan memahami alur proses.',
                'Pendampingan yang terasa dekat selama persiapan dokumen dan manasik.',
              ].map((item) => (
                <div key={item} className="rounded-[16px] border border-border bg-surface px-4 py-4 text-sm leading-7 text-text-secondary">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[20px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
            <div className="text-sm font-semibold text-white/72">Setelah membaca pengalaman jamaah</div>
            <h2 className="mt-3 text-2xl font-bold leading-snug">Langkah berikutnya bisa tetap tenang dan tidak perlu terburu-buru.</h2>
            <p className="mt-3 text-sm leading-7 text-white/78">
              Gunakan testimoni ini sebagai penguat awal, lalu lanjutkan ke paket aktif atau buka percakapan WhatsApp untuk menyesuaikan kebutuhan dan budget keluarga.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button href="/paket-umrah" variant="secondary" fullWidth className="bg-white text-primary hover:bg-white/92 border-white">
                Lihat paket
              </Button>
              <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="ghost" fullWidth className="border border-white/20 text-white hover:bg-white/10">
                WhatsApp konsultasi
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      <ContentCta
        eyebrow="Konsultasi yang amanah"
        title="Masih ingin memastikan pilihan travel, paket, atau kesiapan dokumen?"
        summary="Tim Mazaya siap membantu menjawab pertanyaan lanjutan dengan ritme yang rapi dan tidak menekan, supaya keputusan tetap terasa matang bersama keluarga."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp konsultasi"
        secondaryHref="/paket-umrah"
        secondaryLabel="Lihat paket aktif"
      />
    </ContentPageLayout>
  )
}
