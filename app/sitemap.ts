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
    '/coffee-shops',
    '/food-trucks',
    '/catering',
    '/about',
    '/contact',
    '/faq',
    '/blog',
    '/blog/choosing-takeout-containers',
    '/blog/eco-friendly-packaging-guide',
    '/blog/food-truck-supplies-checklist',
    '/blog/reduce-packaging-costs',
    '/blog/restaurant-disposables-guide',
    '/blog/custom-branded-packaging',
    '/blog/coffee-shop-cups-lids-guide',
    '/blog/new-restaurant-supply-checklist',
    '/blog/napkins-paper-products-guide',
    '/blog/gloves-food-safety-compliance',
    '/blog/rsd-vs-webstaurantstore',
    '/privacy',
    '/terms',
    '/shipping',
    '/returns',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : route.includes('shop') || route.includes('takeout') || route.includes('cups') ? 0.9 : 0.8,
  }))
}
