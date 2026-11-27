import { describe, expect, it } from 'vitest';
import { type BlogPost } from '../blog-post';
import { listBlogSitemapEntries } from '../list-blog-sitemap-entries';

const BASE_URL = 'https://example.com';

describe('listBlogSitemapEntries', () => {
  it('lists the blog index.', () => {
    const entries = listBlogSitemapEntries([], BASE_URL);

    expect(entries).toEqual([
      expect.objectContaining({
        url: 'https://example.com/blog',
        changeFrequency: 'monthly',
        priority: 0.8,
      }),
    ]);
  });

  it('lists each post, last modified when it was published.', () => {
    const post = makePost({
      slug: 'on-craftsmanship',
      published: new Date('2026-03-01'),
    });

    const [, postEntry] = listBlogSitemapEntries([post], BASE_URL);

    expect(postEntry).toEqual({
      url: 'https://example.com/blog/on-craftsmanship',
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  it('dates a post by its last update when it has one.', () => {
    const post = makePost({
      published: new Date('2026-03-01'),
      updated: new Date('2026-04-15'),
    });

    const [, postEntry] = listBlogSitemapEntries([post], BASE_URL);

    expect(postEntry?.lastModified).toEqual(new Date('2026-04-15'));
  });

  it('leaves out drafts.', () => {
    const draft = makePost({ isDraft: true, published: undefined });

    expect(listBlogSitemapEntries([draft], BASE_URL)).toHaveLength(1);
  });
});

function makePost(overrides: Partial<BlogPost>): BlogPost {
  return {
    slug: 'post',
    title: 'Title',
    description: 'Description',
    published: new Date('2026-01-01'),
    updated: undefined,
    isDraft: false,
    tags: [],
    ...overrides,
  };
}
