import type { APIRoute } from 'astro';
import { loadBlogPosts } from '../app/blog';
import { listBlogSitemapEntries } from '../lib/blog/list-blog-sitemap-entries';
import { renderSitemap, type SitemapEntry } from '../lib/seo/sitemap';

// `site` comes from astro.config.mjs, so the domain is defined in one place.
export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('Set `site` in astro.config.mjs to build the sitemap.');
  }

  const entries = [
    ...getPageEntries(site.origin),
    ...listBlogSitemapEntries(await loadBlogPosts(), site.origin),
  ];

  return new Response(renderSitemap(entries), {
    headers: { 'Content-Type': 'application/xml' },
  });
};

function getPageEntries(baseUrl: string): ReadonlyArray<SitemapEntry> {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/minesweeper`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/advent-of-code`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
