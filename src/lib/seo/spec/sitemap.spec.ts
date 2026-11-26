import { describe, expect, it } from 'vitest';
import { renderSitemap } from '../sitemap';

describe('renderSitemap', () => {
  it('renders entries in the same XML format Next.js produced.', () => {
    const lastModified = new Date('2026-11-26T05:20:13.162Z');

    const xml = renderSitemap([
      {
        url: 'https://example.com',
        lastModified,
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://example.com/resume',
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ]);

    expect(xml).toBe(
      [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '<url>',
        '<loc>https://example.com</loc>',
        '<lastmod>2026-11-26T05:20:13.162Z</lastmod>',
        '<changefreq>monthly</changefreq>',
        '<priority>1</priority>',
        '</url>',
        '<url>',
        '<loc>https://example.com/resume</loc>',
        '<lastmod>2026-11-26T05:20:13.162Z</lastmod>',
        '<changefreq>monthly</changefreq>',
        '<priority>0.8</priority>',
        '</url>',
        '</urlset>',
        '',
      ].join('\n')
    );
  });
});
