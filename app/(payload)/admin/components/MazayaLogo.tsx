import Image from 'next/image'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

export function MazayaLogo() {
  return (
    <div className="mazaya-admin-logo" aria-label="Mazaya Travel Admin">
      <Image
        src={logoImage}
        alt="Logo Mazaya Travel"
        className="mazaya-admin-logo__image"
        width={Math.round((logoImage.width / logoImage.height) * 52)}
        height={52}
        priority
      />
      <div className="mazaya-admin-logo__text">
        <strong>Mazaya</strong>
        <span>Travel Admin</span>
      </div>
    </div>
  )
}
