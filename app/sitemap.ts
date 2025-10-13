import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://restaurantsuppliesdirect.com'

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/shop',
    '/custom-printing',
    '/wholesale-programs',
    '/la-hospitality-supplies',
    '/login',
    '/signup',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const categoryPages = [
    '/takeout-containers',
    '/cups-and-lids',
    '/napkins-and-towels',
    '/gloves-and-bags',
    '/eco-friendly',
    '/tabletop',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const blogPages = [
    '/blog',
    '/blog/choosing-takeout-containers',
    '/blog/eco-friendly-packaging-guide',
    '/blog/reduce-packaging-costs',
    '/blog/food-truck-supplies-checklist',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...categoryPages, ...blogPages]
}
