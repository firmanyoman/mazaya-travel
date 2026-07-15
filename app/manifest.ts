import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mazaya Travel',
    short_name: 'Mazaya Travel',
    description: 'Informasi paket Umrah, legalitas, dan konsultasi Mazaya Travel.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d6b67',
  }
}
