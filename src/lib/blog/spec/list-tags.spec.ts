import { describe, expect, it } from 'vitest';
import { type BlogPost } from '../blog-post';
import { getPostsTagged, listTags } from '../list-tags';

describe('listTags', () => {
  it('lists each tag once, alphabetically.', () => {
    const posts = [
      makePost({ tags: ['testing', 'craft'] }),
      makePost({ tags: ['craft', 'ai'] }),
    ];

    expect(listTags(posts)).toEqual(['ai', 'craft', 'testing']);
  });
});

describe('getPostsTagged', () => {
  it('keeps only the posts with the tag.', () => {
    const tagged = makePost({ slug: 'tagged', tags: ['craft', 'ai'] });
    const untagged = makePost({ slug: 'untagged', tags: ['testing'] });

    expect(getPostsTagged([tagged, untagged], 'craft')).toEqual([tagged]);
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
