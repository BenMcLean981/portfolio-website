import { describe, expect, it } from 'vitest';
import { type BlogPost } from '../blog-post';
import { listVisiblePosts } from '../list-visible-posts';

describe('listVisiblePosts', () => {
  it('shows drafts on a preview branch.', () => {
    const draft = makeDraft();

    const posts = listVisiblePosts([draft], {
      WORKERS_CI_BRANCH: 'bmclean/new-post',
    });

    expect(posts).toEqual([draft]);
  });

  it('hides drafts by default.', () => {
    expect(listVisiblePosts([makeDraft()], {})).toEqual([]);
  });

  it('hides drafts on the production branch.', () => {
    expect(
      listVisiblePosts([makeDraft()], { WORKERS_CI_BRANCH: 'main' })
    ).toEqual([]);
  });

  it('shows drafts when SHOW_DRAFTS is true.', () => {
    const draft = makeDraft();

    expect(listVisiblePosts([draft], { SHOW_DRAFTS: 'true' })).toEqual([draft]);
  });
});

function makeDraft(): BlogPost {
  return {
    slug: 'draft',
    title: 'Draft',
    description: 'A draft.',
    published: undefined,
    updated: undefined,
    isDraft: true,
    tags: [],
    hn: undefined,
  };
}
