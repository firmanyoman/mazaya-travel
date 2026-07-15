import type { MetadataRoute } from 'next'
import { articles } from '@/app/(site)/artikel/articles'
import { getVisiblePackages } from '@/app/lib/packages'
import { siteUrl } from '@/app/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['', '/tentang-kami', '/legalitas', '/kontak', '/faq', '/testimoni', '/dokumentasi', '/paket-umrah', '/paket-haji', '/artikel', '/kebijakan-privasi', '/syarat-ketentuan']
  const packages = await getVisiblePackages()

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...packages.map((pkg) => ({
      url: `${siteUrl}/paket/${pkg.slug}`,
      lastModified: new Date(pkg.updatedAt ?? pkg.departureDate),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/artikel/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
