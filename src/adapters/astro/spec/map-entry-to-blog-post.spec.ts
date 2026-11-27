import type { CollectionEntry } from 'astro:content';
import { describe, expect, it } from 'vitest';
import { mapEntryToBlogPost } from '../map-entry-to-blog-post';

describe('mapEntryToBlogPost', () => {
  it('uses the file name as the slug.', () => {
    const post = mapEntryToBlogPost(makeEntry('on-craftsmanship'));

    expect(post.slug).toBe('on-craftsmanship');
  });
});

function makeEntry(id: string): CollectionEntry<'blog'> {
  return {
    id,
    collection: 'blog',
    data: {
      title: 'Title',
      description: 'Description',
      published: new Date('2026-01-01'),
      draft: false,
      tags: [],
    },
  };
}
