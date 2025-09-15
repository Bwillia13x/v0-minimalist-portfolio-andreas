import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://prairiesignal.ca'
  const now = new Date().toISOString()
  return [
    '',
    '/',
    '/andreas',
    '/new-site',
    '/marketing',
    '/demo',
    '/command-center',
    '/agents',
    '/owner-dashboard',
    '/pricing',
    '/security',
    '/contact',
  ].filter(Boolean).map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }))
}


