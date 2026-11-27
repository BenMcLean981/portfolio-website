import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { type BlogPost } from '../../../lib/blog/blog-post';
import { BlogPostPage } from '../blog-post-page';

describe('BlogPostPage', () => {
  it('uses the title as the page heading.', () => {
    render(<BlogPostPage post={makePost({ title: 'On craftsmanship' })} />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'On craftsmanship' })
    ).toBeInTheDocument();
  });

  it('links each tag to its page.', () => {
    render(<BlogPostPage post={makePost({ tags: ['craft', 'testing'] })} />);

    expect(screen.getByRole('link', { name: 'craft' })).toHaveAttribute(
      'href',
      '/blog/tags/craft'
    );
    expect(screen.getByRole('link', { name: 'testing' })).toHaveAttribute(
      'href',
      '/blog/tags/testing'
    );
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
