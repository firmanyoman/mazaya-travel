'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

interface PackageOption {
  id: number
  title: string
  slug: string
  price: number | null
  priceMode: string
  departureDate: string
}

interface Props {
  allPackages: PackageOption[]
  initialPackageId: number | null
}

const progressSteps = [
  {
    id: '01',
    title: 'Pilih paket',
    description: 'Pastikan jadwal yang ingin didaftarkan sudah sesuai.',
  },
  {
    id: '02',
    title: 'Isi data jemaah',
    description: 'Lengkapi identitas dan kontak yang aktif dipakai.',
  },
  {
    id: '03',
    title: 'Kirim & konfirmasi',
    description: 'Tim Mazaya meninjau data lalu menghubungi Anda melalui WhatsApp.',
  },
]

function formatPrice(price: number | null) {
  if (!price) return 'Hubungi Admin'

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}

function formatDepartureDate(value: string) {
  if (!value) return 'Jadwal menyusul'

  return new Date(value).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function getPackageOptionLabel(pkg: PackageOption) {
  const priceLabel = pkg.priceMode === 'public' ? formatPrice(pkg.price) : 'Hubungi Admin'

  return `${pkg.title} • ${formatDepartureDate(pkg.departureDate)} • ${priceLabel}`
}

function FieldShell({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={[`space-y-2`, className].filter(Boolean).join(' ')}>{children}</div>
}

function FieldLabel({
  htmlFor,
  required = false,
  children,
}: {
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-text-secondary">
      {children}
      {required ? <span className="ml-1 text-danger">*</span> : null}
    </label>
  )
}

const inputClassName = 'focus-ring min-h-13 w-full rounded-[12px] border border-border bg-surface px-4 py-3 text-[15px] text-text placeholder:text-icon-muted shadow-[var(--shadow-1)] transition-[border-color,box-shadow] duration-150 focus:border-primary focus:outline-none'
const panelClassName = 'rounded-[24px] border border-border bg-surface p-6 shadow-[var(--shadow-1)] md:p-8'

export default function RegistrationFormClient({
  allPackages,
  initialPackageId,
}: Props) {
  const [packageId, setPackageId] = useState<number | ''>(
    initialPackageId !== null ? initialPackageId : ''
  )
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [nik, setNik] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [city, setCity] = useState('')
  const [gender, setGender] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [ktpFile, setKtpFile] = useState<File | null>(null)
  const [privacyConsentGiven, setPrivacyConsentGiven] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const selectedPackage = allPackages.find((pkg) => pkg.id === Number(packageId))
  const isPackageLocked = initialPackageId !== null
  const isPackageChosen = Boolean(selectedPackage)
  const allowedKtpTypes = ['image/jpeg', 'image/png', 'application/pdf']
  const maxKtpFileSize = 2 * 1024 * 1024

  const whatsappContactUrl = useMemo(() => {
    const message = `Assalamualaikum Mazaya Travel, saya sudah mengisi form pendaftaran atas nama ${fullName || '[Nama Anda]'}${selectedPackage ? ` untuk paket ${selectedPackage.title}` : ''}.`

    return `https://wa.me/6285298751997?text=${encodeURIComponent(message)}`
  }, [fullName, selectedPackage])

  const packageGuidance = selectedPackage
    ? [
        {
          label: 'Keberangkatan',
          value: formatDepartureDate(selectedPackage.departureDate),
        },
        {
          label: 'Skema harga',
          value: selectedPackage.priceMode === 'public' ? formatPrice(selectedPackage.price) : 'Hubungi Admin',
        },
      ]
    : [
        {
          label: 'Belum memilih paket',
          value: 'Silakan pilih paket lebih dulu agar tim Mazaya mengetahui keberangkatan yang Anda maksud.',
        },
        {
          label: 'Butuh bantuan?',
          value: 'Gunakan tombol WhatsApp di samping bila ingin bertanya sebelum mulai mengisi.',
        },
      ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)
    setSuccessMessage(null)

    try {
      if (!ktpFile) {
        throw new Error('Unggah file KTP wajib diisi')
      }

      if (!allowedKtpTypes.includes(ktpFile.type)) {
        throw new Error('File KTP harus berupa JPG, PNG, atau PDF')
      }

      if (ktpFile.size > maxKtpFileSize) {
        throw new Error('Ukuran file KTP maksimal 2 MB')
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'registration',
          packageId: packageId ? Number(packageId) : null,
          fullName,
          phone,
          nik: nik || null,
          fatherName,
          city,
          gender: gender || null,
          birthDate: birthDate || null,
          ktpFile: JSON.stringify({
            name: ktpFile.name,
            type: ktpFile.type,
            size: ktpFile.size,
            lastModified: ktpFile.lastModified,
          }),
          privacyConsentGiven,
        }),
      })

      const data: { error?: string } = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Terjadi kesalahan saat pendaftaran')
      }

      setSuccessMessage('Pendaftaran Anda berhasil dikirim. Tim Mazaya akan meninjau data dan segera menghubungi Anda.')
      setFullName('')
      setPhone('')
      setNik('')
      setFatherName('')
      setCity('')
      setGender('')
      setBirthDate('')
      setKtpFile(null)
      setPrivacyConsentGiven(false)
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'Terjadi kesalahan jaringan')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <SectionShell surface="card" className="relative overflow-hidden px-6 py-8 md:px-8 lg:px-12 lg:py-12">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(97,199,195,0.22),transparent_56%)]" />
        <div className="absolute right-10 top-10 hidden h-16 w-16 rounded-full bg-brand-yellow/20 blur-2xl lg:block" />
        <div className="relative grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-text-secondary">
              <Link href="/" className="transition-colors hover:text-primary">
                Beranda
              </Link>
              <span className="text-border-strong">/</span>
              <span className="text-muted">Pendaftaran</span>
              {selectedPackage ? (
                <>
                  <span className="text-border-strong">/</span>
                  <span className="text-muted">{selectedPackage.title}</span>
                </>
              ) : null}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-primary/10 bg-primary-soft px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                Form pendaftaran Mazaya
              </span>
              <span className="rounded-full bg-brand-yellow/70 px-3 py-1 text-xs font-bold text-text">
                Untuk data awal jamaah
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-[52px] lg:leading-[1.16]">
                Formulir pendaftaran untuk membantu tim Mazaya menerima data awal jamaah dengan rapi.
              </h1>
              <p className="max-w-2xl text-[17px] leading-8 text-muted lg:text-lg">
                Isi data inti jamaah, pilih paket yang ingin didaftarkan, lalu kirimkan form ini. Setelah data masuk, tim Mazaya akan menghubungi Anda secara personal melalui WhatsApp.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[16px] border border-border bg-surface-subtle px-4 py-4">
                <div className="text-sm text-muted">Estimasi waktu isi</div>
                <div className="mt-1 text-base font-semibold text-text">± 3 menit</div>
              </div>
              <div className="rounded-[16px] border border-border bg-surface-subtle px-4 py-4">
                <div className="text-sm text-muted">Tindak lanjut</div>
                <div className="mt-1 text-base font-semibold text-text">Via WhatsApp aktif</div>
              </div>
              <div className="rounded-[16px] border border-border bg-surface-subtle px-4 py-4">
                <div className="text-sm text-muted">Privasi data</div>
                <div className="mt-1 text-base font-semibold text-text">Dipakai untuk administrasi</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[24px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
              <div className="text-sm font-semibold text-white/72">
                {selectedPackage ? 'Paket yang sedang Anda daftarkan' : 'Panduan sebelum mulai'}
              </div>
              <div className="mt-3 text-2xl font-bold leading-snug">
                {selectedPackage ? selectedPackage.title : 'Pilih paket lebih dulu agar tim Mazaya mengetahui keberangkatan yang Anda maksud.'}
              </div>
              <div className="mt-5 grid gap-3">
                {packageGuidance.map((item) => (
                  <div key={item.label} className="rounded-[16px] border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/68">{item.label}</div>
                    <div className="mt-1 text-sm leading-7 text-white">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {selectedPackage ? (
                  <Button href={`/paket/${selectedPackage.slug}`} variant="secondary" className="bg-white text-primary hover:bg-white/92 border-white sm:min-w-44">
                    Lihat detail paket
                  </Button>
                ) : null}
                <Button
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  className="border border-white/20 text-white hover:bg-white/10 sm:min-w-44"
                >
                  WhatsApp Konsultasi
                </Button>
              </div>
            </div>

            <div className="rounded-[24px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <div className="text-sm font-semibold text-primary">Alur singkat</div>
              <div className="mt-4 grid gap-4">
                {progressSteps.map((step, index) => (
                  <div key={step.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-primary-soft text-sm font-bold text-primary">
                        {step.id}
                      </div>
                      {index < progressSteps.length - 1 ? <div className="mt-2 h-full w-px bg-border" /> : null}
                    </div>
                    <div className="pb-4">
                      <div className="text-base font-semibold text-text">{step.title}</div>
                      <div className="mt-1 text-sm leading-7 text-muted">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {errorMessage ? (
        <SectionShell surface="card" className="px-6 py-5 md:px-8 md:py-6">
          <div className="rounded-[16px] border border-danger/15 bg-danger-soft px-5 py-4 text-sm leading-7 text-danger">
            <div className="font-semibold">Pendaftaran belum dapat dikirim.</div>
            <div className="mt-1">{errorMessage}</div>
          </div>
        </SectionShell>
      ) : null}

      {successMessage ? (
        <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-[24px] border border-success/20 bg-success-soft p-6 md:p-8">
              <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-success">
                Pendaftaran terkirim
              </div>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl">
                Data awal Anda sudah masuk ke tim Mazaya.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-text-secondary">
                {successMessage}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[16px] border border-success/15 bg-white/75 px-4 py-4">
                  <div className="text-sm text-muted">Langkah berikutnya</div>
                  <div className="mt-1 text-base font-semibold text-text">Tunggu konfirmasi admin</div>
                </div>
                <div className="rounded-[16px] border border-success/15 bg-white/75 px-4 py-4">
                  <div className="text-sm text-muted">Jalur komunikasi</div>
                  <div className="mt-1 text-base font-semibold text-text">WhatsApp yang Anda isi</div>
                </div>
              </div>
            </div>
            <div className="rounded-[24px] border border-border bg-surface-subtle p-6 md:p-8">
              <div className="text-sm font-semibold text-primary">Ingin mempercepat koordinasi?</div>
              <p className="mt-3 text-sm leading-8 text-text-secondary">
                Anda dapat mengirim pesan singkat agar tim kami mudah mencocokkan data pendaftaran dengan nomor WhatsApp yang aktif.
              </p>
              <div className="mt-6 grid gap-3">
                <Button href={whatsappContactUrl} target="_blank" rel="noopener noreferrer" size="lg" fullWidth>
                  Konfirmasi via WhatsApp
                </Button>
                <Button href="/paket-umrah" variant="secondary" size="lg" fullWidth>
                  Lihat paket lainnya
                </Button>
              </div>
            </div>
          </div>
        </SectionShell>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
          <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <section className={panelClassName}>
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <div className="inline-flex rounded-full bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      1. Paket selection
                    </div>
                    <h2 className="text-2xl font-bold text-text">Tentukan paket yang ingin didaftarkan</h2>
                    <p className="max-w-2xl text-sm leading-7 text-muted">
                      Pilihan paket membantu tim Mazaya memahami jadwal, estimasi biaya, dan langkah lanjutan yang perlu dijelaskan lebih dulu.
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-border bg-surface-subtle px-4 py-3 text-sm text-text-secondary">
                    {isPackageLocked ? 'Paket datang dari halaman detail paket.' : 'Bisa diisi umum atau spesifik paket.'}
                  </div>
                </div>

                <FieldShell>
                  <FieldLabel htmlFor="packageSelect" required>
                    Paket perjalanan
                  </FieldLabel>
                  <select
                    id="packageSelect"
                    value={packageId}
                    onChange={(e) => setPackageId(e.target.value ? Number(e.target.value) : '')}
                    required
                    disabled={isPackageLocked}
                    className={[inputClassName, isPackageLocked ? 'cursor-not-allowed bg-surface-subtle text-muted' : ''].join(' ')}
                  >
                    <option value="">Pilih paket keberangkatan</option>
                    {allPackages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {getPackageOptionLabel(pkg)}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs leading-6 text-muted">
                    {isPackageLocked
                      ? 'Paket ini dipilih otomatis dari halaman detail. Jika ingin mengganti, kembali ke daftar paket terlebih dulu.'
                      : 'Jika belum yakin, pilih paket yang paling mendekati rencana keberangkatan Anda.'}
                  </p>
                </FieldShell>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[16px] border border-primary/10 bg-primary-soft/60 px-5 py-5">
                    <div className="text-sm font-semibold text-primary">Ringkasan pilihan</div>
                    <div className="mt-2 text-lg font-bold leading-snug text-text">
                      {selectedPackage ? selectedPackage.title : 'Belum ada paket terpilih'}
                    </div>
                    <div className="mt-4 grid gap-3 text-sm text-text-secondary">
                      <div>
                        <div className="text-muted">Tanggal keberangkatan</div>
                        <div className="mt-1 font-semibold text-text">
                          {selectedPackage ? formatDepartureDate(selectedPackage.departureDate) : 'Pilih paket terlebih dulu'}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted">Estimasi harga</div>
                        <div className="mt-1 font-semibold text-text">
                          {selectedPackage
                            ? selectedPackage.priceMode === 'public'
                              ? formatPrice(selectedPackage.price)
                              : 'Hubungi Admin'
                            : 'Menyesuaikan paket yang dipilih'}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[16px] border border-border bg-surface-subtle px-5 py-5">
                    <div className="text-sm font-semibold text-primary">Catatan penting</div>
                    <ul className="mt-3 grid gap-2 text-sm leading-7 text-text-secondary">
                      <li>Form ini membantu intake awal, bukan finalisasi seluruh dokumen perjalanan.</li>
                      <li>Admin akan memverifikasi ulang data inti sebelum tahap administrasi berikutnya.</li>
                      <li>Jika paket penuh atau berubah, tim akan menawarkan opsi terdekat dengan kebutuhan Anda.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className={panelClassName}>
                <div className="mb-6 space-y-2">
                  <div className="inline-flex rounded-full bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    2. Personal identity
                  </div>
                  <h2 className="text-2xl font-bold text-text">Lengkapi identitas jemaah</h2>
                  <p className="max-w-2xl text-sm leading-7 text-muted">
                    Mohon isi sesuai data resmi agar proses pencocokan dokumen dan komunikasi berikutnya berjalan lebih lancar.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <FieldShell className="md:col-span-2">
                    <FieldLabel htmlFor="fullName" required>
                      Nama lengkap sesuai KTP
                    </FieldLabel>
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="Contoh: Muhammad Ali"
                      className={inputClassName}
                    />
                  </FieldShell>

                  <FieldShell>
                    <FieldLabel htmlFor="nik" required>
                      Nomor Induk Kependudukan (NIK)
                    </FieldLabel>
                    <input
                      id="nik"
                      type="text"
                      value={nik}
                      onChange={(e) => setNik(e.target.value)}
                      required
                      maxLength={16}
                      placeholder="16 digit NIK KTP Anda"
                      className={inputClassName}
                    />
                  </FieldShell>

                  <FieldShell>
                    <FieldLabel htmlFor="fatherName" required>
                      Nama ayah
                    </FieldLabel>
                    <input
                      id="fatherName"
                      type="text"
                      value={fatherName}
                      onChange={(e) => setFatherName(e.target.value)}
                      required
                      placeholder="Contoh: Abdullah"
                      className={inputClassName}
                    />
                  </FieldShell>

                  <FieldShell>
                    <FieldLabel htmlFor="gender" required>
                      Jenis kelamin
                    </FieldLabel>
                    <select
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                      className={inputClassName}
                    >
                      <option value="">Pilih jenis kelamin</option>
                      <option value="laki-laki">Laki-laki</option>
                      <option value="perempuan">Perempuan</option>
                    </select>
                  </FieldShell>

                  <FieldShell>
                    <FieldLabel htmlFor="birthDate" required>
                      Tanggal lahir
                    </FieldLabel>
                    <input
                      id="birthDate"
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      required
                      className={inputClassName}
                    />
                  </FieldShell>
                </div>
              </section>

              <section className={panelClassName}>
                <div className="mb-6 space-y-2">
                  <div className="inline-flex rounded-full bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    3. Contact & domisili
                  </div>
                  <h2 className="text-2xl font-bold text-text">Nomor aktif dan kota domisili</h2>
                  <p className="max-w-2xl text-sm leading-7 text-muted">
                    Data ini dipakai untuk koordinasi jadwal, pengecekan berkas, dan pengingat bila ada data yang perlu dilengkapi.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <FieldShell>
                    <FieldLabel htmlFor="phone" required>
                      Nomor WhatsApp aktif
                    </FieldLabel>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="Contoh: 085298751997"
                      className={inputClassName}
                    />
                    <p className="text-xs leading-6 text-muted">
                      Pastikan nomor ini aktif agar admin dapat menghubungi tanpa kendala.
                    </p>
                  </FieldShell>

                  <FieldShell>
                    <FieldLabel htmlFor="city" required>
                      Kota domisili
                    </FieldLabel>
                    <input
                      id="city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      placeholder="Contoh: Bone"
                      className={inputClassName}
                    />
                  </FieldShell>
                </div>
              </section>

              <section className={panelClassName}>
                <div className="mb-6 space-y-2">
                  <div className="inline-flex rounded-full bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    4. Document upload
                  </div>
                  <h2 className="text-2xl font-bold text-text">Unggah file KTP untuk pemeriksaan awal</h2>
                  <p className="max-w-2xl text-sm leading-7 text-muted">
                    File ini membantu admin memeriksa data awal pendaftar. Dokumen lanjutan tetap akan dibicarakan secara langsung bila diperlukan.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <FieldShell>
                    <FieldLabel htmlFor="ktpFile" required>
                      File KTP
                    </FieldLabel>
                    <div className="rounded-[20px] border border-dashed border-primary/25 bg-primary-soft/30 p-4">
                      <input
                        id="ktpFile"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        required
                        onChange={(e) => setKtpFile(e.target.files?.[0] ?? null)}
                        className="focus-ring w-full rounded-[12px] border border-border bg-surface px-4 py-3 text-sm text-text file:mr-4 file:rounded-[12px] file:border-0 file:bg-primary file:px-4 file:py-2 file:font-semibold file:text-white"
                      />
                      <div className="mt-3 text-xs leading-6 text-muted">
                        Format yang diterima: JPG, PNG, atau PDF. Ukuran maksimal 2 MB.
                      </div>
                    </div>
                  </FieldShell>

                  <div className="rounded-[16px] border border-border bg-surface-subtle px-5 py-5">
                    <div className="text-sm font-semibold text-primary">Yang perlu diperhatikan</div>
                    <ul className="mt-3 grid gap-2 text-sm leading-7 text-text-secondary">
                      <li>Pastikan file dapat dibaca dengan jelas.</li>
                      <li>Nama file bebas, selama dokumen sesuai identitas pendaftar.</li>
                      <li>Jika kesulitan upload, Anda tetap bisa konsultasi dulu via WhatsApp.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className={panelClassName}>
                <div className="mb-6 space-y-2">
                  <div className="inline-flex rounded-full bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    5. Consent & confirmation
                  </div>
                  <h2 className="text-2xl font-bold text-text">Persetujuan penggunaan data</h2>
                  <p className="max-w-2xl text-sm leading-7 text-muted">
                    Kami hanya menggunakan data yang Anda kirim untuk proses administrasi pendaftaran dan komunikasi layanan terkait perjalanan.
                  </p>
                </div>

                <div className="rounded-[16px] border border-border bg-surface-subtle px-5 py-5">
                  <label htmlFor="privacyConsent" className="flex items-start gap-3 text-sm leading-7 text-text-secondary">
                    <input
                      id="privacyConsent"
                      type="checkbox"
                      checked={privacyConsentGiven}
                      onChange={(e) => setPrivacyConsentGiven(e.target.checked)}
                      required
                      className="mt-1 h-4 w-4 rounded border-border text-primary"
                    />
                    <span>
                      Saya menyetujui bahwa data yang saya masukkan adalah benar dan saya memberikan izin kepada PT Mazaya Amanah Wisata untuk menggunakan data ini demi keperluan proses administrasi pendaftaran Umrah/Haji.
                      <span className="ml-1 text-danger">*</span>
                    </span>
                  </label>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="submit"
                    disabled={!privacyConsentGiven || isSubmitting || !isPackageChosen}
                    className="focus-ring inline-flex min-h-14 items-center justify-center rounded-[12px] border border-primary bg-primary px-6 text-base font-semibold text-white shadow-[var(--shadow-1)] transition-[background-color,border-color,box-shadow,opacity] duration-150 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim pendaftaran'}
                  </button>

                  <Button
                    href={whatsappContactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="lg"
                  >
                    WhatsApp Konsultasi
                  </Button>
                </div>
                {!isPackageChosen ? (
                  <p className="mt-3 text-xs leading-6 text-danger">
                    Silakan pilih paket terlebih dulu sebelum mengirim pendaftaran.
                  </p>
                ) : null}
              </section>
            </form>
          </SectionShell>

          <div className="grid gap-6">
            <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
              <div className="space-y-5">
                <div>
                  <div className="text-sm font-semibold text-primary">Bantuan singkat</div>
                  <h2 className="mt-2 text-2xl font-bold text-text">Hal yang baik disiapkan sebelum mengisi</h2>
                </div>
                <div className="grid gap-3">
                  <div className="rounded-[16px] border border-border bg-surface-subtle px-4 py-4">
                    <div className="text-sm font-semibold text-text">Siapkan KTP lebih dulu</div>
                    <div className="mt-1 text-sm leading-7 text-muted">Membantu Anda menyelesaikan pengisian dalam satu alur tanpa bolak-balik.</div>
                  </div>
                  <div className="rounded-[16px] border border-border bg-surface-subtle px-4 py-4">
                    <div className="text-sm font-semibold text-text">Gunakan nomor WhatsApp pribadi</div>
                    <div className="mt-1 text-sm leading-7 text-muted">Nomor aktif membantu admin menghubungi Anda tanpa tertunda.</div>
                  </div>
                  <div className="rounded-[16px] border border-border bg-surface-subtle px-4 py-4">
                    <div className="text-sm font-semibold text-text">Belum yakin paketnya?</div>
                    <div className="mt-1 text-sm leading-7 text-muted">Konsultasi singkat tetap terbuka sebelum Anda mengirim form.</div>
                  </div>
                </div>
              </div>
            </SectionShell>

            <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
              <div className="rounded-[24px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
                <div className="text-sm font-semibold text-white/72">Kontak layanan</div>
                <div className="mt-3 text-2xl font-bold">0852 9875 1997</div>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Jika Anda ingin memastikan kecocokan paket, kuota, atau dokumen sebelum mengirim form, tim Mazaya siap membantu dengan penjelasan yang lebih tenang dan jelas.
                </p>
                <div className="mt-6 grid gap-3">
                  <Button href={whatsappContactUrl} target="_blank" rel="noopener noreferrer" variant="secondary" fullWidth className="bg-white text-primary hover:bg-white/92 border-white">
                    Hubungi via WhatsApp
                  </Button>
                  <Button href="/paket-umrah" variant="ghost" fullWidth className="border border-white/20 text-white hover:bg-white/10">
                    Lihat paket Umrah
                  </Button>
                </div>
              </div>
            </SectionShell>

            <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
              <div className="space-y-4">
                <div className="text-sm font-semibold text-primary">Privasi & proses</div>
                <ul className="grid gap-3 text-sm leading-7 text-text-secondary">
                  <li className="rounded-[16px] border border-border bg-surface-subtle px-4 py-3">
                    Data dipakai untuk kebutuhan administrasi pendaftaran dan koordinasi layanan.
                  </li>
                  <li className="rounded-[16px] border border-border bg-surface-subtle px-4 py-3">
                    Tim akan meninjau ulang data yang masuk sebelum meminta dokumen lanjutan.
                  </li>
                  <li className="rounded-[16px] border border-border bg-surface-subtle px-4 py-3">
                    Jika ada data yang belum lengkap, admin akan menghubungi Anda secara personal agar penjelasannya tidak terputus.
                  </li>
                </ul>
              </div>
            </SectionShell>
          </div>
        </div>
      )}
    </div>
  )
}
