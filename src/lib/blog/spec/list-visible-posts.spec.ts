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
});

function makeDraft(): BlogPost {
  return { slug: 'draft', published: undefined, draft: true };
}
