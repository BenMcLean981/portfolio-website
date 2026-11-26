export type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: 'monthly';
  priority: number;
};

export function renderSitemap(entries: ReadonlyArray<SitemapEntry>): string {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.flatMap(renderEntry),
    '</urlset>',
    '',
  ].join('\n');
}

function renderEntry(entry: SitemapEntry): ReadonlyArray<string> {
  return [
    '<url>',
    `<loc>${entry.url}</loc>`,
    `<lastmod>${entry.lastModified.toISOString()}</lastmod>`,
    `<changefreq>${entry.changeFrequency}</changefreq>`,
    `<priority>${entry.priority}</priority>`,
    '</url>',
  ];
}
