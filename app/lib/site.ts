export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://mazayatravel.co.id').replace(/\/$/, '')
export const siteName = 'Mazaya Travel'
export const whatsappNumber = '6285298751997'

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}
