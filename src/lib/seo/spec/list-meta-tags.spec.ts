import { describe, expect, it } from 'vitest';
import { listMetaTags, type PageMetadata } from '../list-meta-tags';

describe('listMetaTags', () => {
  it('describes the page for search engines.', () => {
    const tags = listMetaTags(makePage({ description: 'About the page.' }));

    expect(tags).toContainEqual({
      name: 'description',
      content: 'About the page.',
    });
  });

  it('describes the page for link previews.', () => {
    const tags = listMetaTags(
      makePage({
        title: 'On craftsmanship',
        description: 'About the page.',
        url: 'https://example.com/blog/on-craftsmanship',
        imageUrl: 'https://example.com/portrait.jpg',
      })
    );

    expect(tags).toEqual(
      expect.arrayContaining([
        { property: 'og:site_name', content: 'Ben McLean' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'On craftsmanship' },
        { property: 'og:description', content: 'About the page.' },
        {
          property: 'og:url',
          content: 'https://example.com/blog/on-craftsmanship',
        },
        { property: 'og:image', content: 'https://example.com/portrait.jpg' },
        { name: 'twitter:card', content: 'summary' },
      ])
    );
  });

  it('marks a blog post as an article with its dates.', () => {
    const tags = listMetaTags(
      makePage({
        article: {
          published: new Date('2026-03-01'),
          updated: new Date('2026-04-15'),
        },
      })
    );

    expect(tags).toEqual(
      expect.arrayContaining([
        { property: 'og:type', content: 'article' },
        {
          property: 'article:published_time',
          content: '2026-03-01T00:00:00.000Z',
        },
        {
          property: 'article:modified_time',
          content: '2026-04-15T00:00:00.000Z',
        },
      ])
    );
    expect(tags).not.toContainEqual({
      property: 'og:type',
      content: 'website',
    });
  });
});

function makePage(overrides: Partial<PageMetadata>): PageMetadata {
  return {
    title: 'Title',
    description: 'Description',
    url: 'https://example.com/page',
    imageUrl: 'https://example.com/image.jpg',
    ...overrides,
  };
}
