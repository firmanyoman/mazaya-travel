'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

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

  const selectedPackage = allPackages.find((p) => p.id === Number(packageId))

  const formatPrice = (p: number | null) => {
    if (!p) return 'Hubungi Admin'
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(p)
  }

  const allowedKtpTypes = ['image/jpeg', 'image/png', 'application/pdf']
  const maxKtpFileSize = 2 * 1024 * 1024

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

      setSuccessMessage('Pendaftaran Anda berhasil dikirim! Admin kami akan segera menghubungi Anda.')
      // Reset form
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

  // Construct WhatsApp redirect for instant support or confirmation
  const whatsappContactUrl = 'https://wa.me/6285298751997?text=' + encodeURIComponent(
    `Assalamualaikum Mazaya Travel, saya sudah mengisi form pendaftaran atas nama ${fullName || '[Nama Anda]'}${selectedPackage ? ` untuk paket ${selectedPackage.title}` : ''}.`
  )

  return (
    <div className="max-w-3xl mx-auto w-full space-y-6">
      {/* Header */}
      <header className="border-b border-border pb-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={logoImage}
            alt="Logo Mazaya Travel"
            className="h-auto w-[120px] object-contain"
            priority
          />
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
        >
          ← Kembali ke Beranda
        </Link>
      </header>

      {/* Main Container */}
      <div className="bg-surface rounded-radius-card p-6 sm:p-10 border border-border shadow-md space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-text">Pendaftaran Paket Perjalanan</h1>
          <p className="text-sm text-muted">
            Silakan lengkapi formulir pendaftaran di bawah ini. Data Anda akan kami simpan dengan aman untuk keperluan koordinasi perjalanan ibadah Anda.
          </p>
        </div>

        {errorMessage && (
          <div className="p-4 bg-danger-soft text-danger-text text-sm rounded-radius-control border border-danger-text/20">
            ⚠️ {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="p-6 bg-success-soft text-success-text rounded-radius-card border border-success-text/20 space-y-4">
            <h3 className="font-bold text-lg">Pendaftaran Sukses!</h3>
            <p className="text-sm">{successMessage}</p>
            <div className="pt-2">
              <a
                href={whatsappContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-6 py-3 bg-primary text-white font-bold rounded-radius-control hover:bg-primary-hover transition-colors shadow-md text-sm"
              >
                Konfirmasi via WhatsApp Sekarang →
              </a>
            </div>
          </div>
        )}

        {!successMessage && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Package Selection */}
            <div className="space-y-2">
              <label htmlFor="packageSelect" className="block text-sm font-bold text-text">
                Pilih Paket Perjalanan <span className="text-red-600">*</span>
              </label>
              <select
                id="packageSelect"
                value={packageId}
                onChange={(e) => setPackageId(e.target.value ? Number(e.target.value) : '')}
                required
                className="w-full p-3.5 bg-surface border border-border rounded-radius-control text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">-- Pilih Paket --</option>
                {allPackages.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.title} - Keberangkatan:{' '}
                    {new Date(pkg.departureDate).toLocaleDateString('id-ID', {
                      month: 'long',
                      year: 'numeric',
                    })}{' '}
                    ({pkg.priceMode === 'public' ? formatPrice(pkg.price) : 'Hubungi Admin'})
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Package Highlight Card */}
            {selectedPackage && (
              <div className="p-4 bg-primary-soft/20 rounded-radius-card border border-primary/20 text-xs sm:text-sm text-text flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <span className="block font-bold">Paket Terpilih:</span>
                  <span className="text-muted">{selectedPackage.title}</span>
                </div>
                <div className="sm:text-right">
                  <span className="block font-bold">Estimasi Harga:</span>
                  <span className="text-primary font-extrabold text-base">
                    {selectedPackage.priceMode === 'public'
                      ? formatPrice(selectedPackage.price)
                      : 'Hubungi Admin'}
                  </span>
                </div>
              </div>
            )}

            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-bold text-text">
                Nama Lengkap (Sesuai KTP) <span className="text-red-600">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Contoh: Muhammad Ali"
                className="w-full p-3.5 bg-surface border border-border rounded-radius-control text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* WhatsApp Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-bold text-text">
                Nomor WhatsApp Aktif <span className="text-red-600">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Contoh: 085298751997"
                className="w-full p-3.5 bg-surface border border-border rounded-radius-control text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <span className="block text-xs text-muted">
                Pastikan nomor WhatsApp aktif untuk koordinasi keberangkatan dan berkas.
              </span>
            </div>

            {/* Identity Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="nik" className="block text-sm font-bold text-text">
                  Nomor Induk Kependudukan (NIK) <span className="text-red-600">*</span>
                </label>
                <input
                  id="nik"
                  type="text"
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
                  required
                  maxLength={16}
                  placeholder="16 Digit NIK KTP Anda"
                  className="w-full p-3.5 bg-surface border border-border rounded-radius-control text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="fatherName" className="block text-sm font-bold text-text">
                  Nama Ayah <span className="text-red-600">*</span>
                </label>
                <input
                  id="fatherName"
                  type="text"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  required
                  placeholder="Contoh: Abdullah"
                  className="w-full p-3.5 bg-surface border border-border rounded-radius-control text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-bold text-text">
                Kota Domisili <span className="text-red-600">*</span>
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                placeholder="Contoh: Bone"
                className="w-full p-3.5 bg-surface border border-border rounded-radius-control text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Gender and Birthdate Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="gender" className="block text-sm font-bold text-text">
                  Jenis Kelamin <span className="text-red-600">*</span>
                </label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    className="w-full p-3.5 bg-surface border border-border rounded-radius-control text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >

                  <option value="">-- Pilih Jenis Kelamin --</option>
                  <option value="male">Laki-laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="birthDate" className="block text-sm font-bold text-text">
                  Tanggal Lahir <span className="text-red-600">*</span>
                </label>
                <input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                  className="w-full p-3.5 bg-surface border border-border rounded-radius-control text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* KTP Upload */}
            <div className="space-y-2">
              <label htmlFor="ktpFile" className="block text-sm font-bold text-text">
                Unggah KTP <span className="text-red-600">*</span>
              </label>
              <input
                id="ktpFile"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                required
                onChange={(e) => setKtpFile(e.target.files?.[0] ?? null)}
                className="w-full p-3.5 bg-surface border border-border rounded-radius-control text-sm text-text file:mr-4 file:rounded-radius-control file:border-0 file:bg-primary-soft file:px-4 file:py-2 file:font-semibold file:text-primary"
              />
              <span className="block text-xs text-muted">
                Format yang diterima: JPG, PNG, atau PDF. Maksimal 2 MB. Untuk saat ini file disimpan sebagai bukti metadata upload agar admin bisa follow up aman via WhatsApp.
              </span>
            </div>

            {/* Privacy Consent */}
            <div className="flex items-start gap-3 pt-2">
              <input
                id="privacyConsent"
                type="checkbox"
                checked={privacyConsentGiven}
                onChange={(e) => setPrivacyConsentGiven(e.target.checked)}
                required
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              <label htmlFor="privacyConsent" className="text-xs sm:text-sm text-muted">
                Saya menyetujui bahwa data yang saya masukkan adalah benar dan saya memberikan izin kepada PT Mazaya Amanah Wisata untuk menggunakan data ini demi keperluan proses administrasi pendaftaran Umrah/Haji. <span className="text-red-600">*</span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 bg-primary text-white text-base font-bold rounded-radius-control hover:bg-primary-hover transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pendaftaran'}
              </button>
              <a
                href={whatsappContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 bg-surface text-primary border border-primary text-base font-bold rounded-radius-control hover:bg-primary-soft transition-colors"
              >
                Tanya Jawab via WhatsApp
              </a>
            </div>
          </form>
        )}
      </div>

      {/* Footer */}
      <footer className="pt-6 border-t border-border/60 text-center text-xs text-muted">
        <p>© 2026 PT Mazaya Amanah Wisata. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  )
}
