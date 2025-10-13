import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.restaurantsuppliesdirect.com'

  const routes = [
    '',
    '/shop',
    '/takeout-containers',
    '/cups-and-lids',
    '/napkins-and-towels',
    '/gloves-and-bags',
    '/eco-friendly',
    '/tabletop',
    '/custom-printing',
    '/wholesale-programs',
    '/la-hospitality-supplies',
    '/about',
    '/contact',
    '/faq',
    '/blog',
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : route.includes('shop') || route.includes('takeout') || route.includes('cups') ? 0.9 : 0.8,
  }))
}
