import { describe, expect, it } from 'vitest';
import { type BlogPost } from '../blog-post';
import { type BlogPostRepository } from '../blog-post-repository';
import { loadVisiblePosts } from '../load-visible-posts';

describe('loadVisiblePosts', () => {
  it('loads the visible posts from the repository.', async () => {
    const published = makePost({ slug: 'published' });
    const draft = makePost({ slug: 'draft', draft: true });
    const repository = new InMemoryBlogPostRepository([published, draft]);

    expect(await loadVisiblePosts(repository, {})).toEqual([published]);
  });
});

class InMemoryBlogPostRepository implements BlogPostRepository {
  public constructor(private readonly posts: ReadonlyArray<BlogPost>) {}

  public async getPosts(): Promise<ReadonlyArray<BlogPost>> {
    return this.posts;
  }
}

function makePost(overrides: Partial<BlogPost>): BlogPost {
  return {
    slug: 'post',
    title: 'Title',
    description: 'Description',
    published: new Date('2026-01-01'),
    updated: undefined,
    draft: false,
    tags: [],
    hn: undefined,
    ...overrides,
  };
}
