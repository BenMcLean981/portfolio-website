import { describe, expect, it } from 'vitest';
import { type BlogPost } from '../blog-post';
import { listFeedItems } from '../list-feed-items';

describe('listFeedItems', () => {
  it('lists each published post, newest first.', () => {
    const older = makePost({
      slug: 'older',
      title: 'Older',
      description: 'The older post.',
      published: new Date('2026-01-01'),
    });
    const newer = makePost({
      slug: 'newer',
      title: 'Newer',
      description: 'The newer post.',
      published: new Date('2026-02-01'),
    });

    expect(listFeedItems([older, newer])).toEqual([
      {
        title: 'Newer',
        description: 'The newer post.',
        path: '/blog/newer',
        published: new Date('2026-02-01'),
      },
      {
        title: 'Older',
        description: 'The older post.',
        path: '/blog/older',
        published: new Date('2026-01-01'),
      },
    ]);
  });

  it('leaves out drafts.', () => {
    const draft = makePost({ isDraft: true, published: undefined });

    expect(listFeedItems([draft])).toEqual([]);
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
