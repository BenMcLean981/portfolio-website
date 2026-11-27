import { describe, expect, it } from 'vitest';
import { type BlogPost } from '../blog-post';
import { getAllPosts, getPublishedPosts } from '../list-posts';

describe('getPublishedPosts', () => {
  it('leaves out drafts.', () => {
    const published = makePost({ slug: 'published' });
    const draft = makePost({ slug: 'draft', draft: true });

    expect(getPublishedPosts([published, draft])).toEqual([published]);
  });

  it('lists the newest post first.', () => {
    const older = makePost({
      slug: 'older',
      published: new Date('2026-01-01'),
    });
    const newer = makePost({
      slug: 'newer',
      published: new Date('2026-02-01'),
    });

    expect(getPublishedPosts([older, newer])).toEqual([newer, older]);
  });
});

describe('getAllPosts', () => {
  it('includes drafts.', () => {
    const published = makePost({ slug: 'published' });
    const draft = makePost({ slug: 'draft', draft: true });

    expect(getAllPosts([published, draft])).toEqual([published, draft]);
  });

  it('puts undated drafts first.', () => {
    const published = makePost({ slug: 'published' });
    const undated = makePost({
      slug: 'undated',
      draft: true,
      published: undefined,
    });

    expect(getAllPosts([published, undated])).toEqual([undated, published]);
  });
});

function makePost(overrides: Partial<BlogPost>): BlogPost {
  return {
    slug: 'post',
    published: new Date('2026-01-01'),
    draft: false,
    ...overrides,
  };
}
