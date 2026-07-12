import Image from 'next/image'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

export function MazayaIcon() {
  return (
    <div className="mazaya-admin-icon" aria-label="Mazaya Travel">
      <Image
        src={logoImage}
        alt="Logo Mazaya Travel"
        className="mazaya-admin-icon__image"
        width={32}
        height={32}
      />
    </div>
  )
}
