import type { APIRoute } from 'astro';
import { renderSitemap, type SitemapEntry } from '../lib/seo/sitemap';

const BASE_URL = 'https://www.ben-mclean-software.com';

function getEntries(): ReadonlyArray<SitemapEntry> {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/minesweeper`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/advent-of-code`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}

export const GET: APIRoute = () =>
  new Response(renderSitemap(getEntries()), {
    headers: { 'Content-Type': 'application/xml' },
  });
