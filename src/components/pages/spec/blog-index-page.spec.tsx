import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { type BlogPost } from '../../../lib/blog/blog-post';
import { BlogIndexPage } from '../blog-index-page';

describe('BlogIndexPage', () => {
  it('links each post to its page.', () => {
    render(
      <BlogIndexPage
        posts={[
          makePost({ slug: 'on-craftsmanship', title: 'On craftsmanship' }),
        ]}
      />
    );

    expect(
      screen.getByRole('link', { name: 'On craftsmanship' })
    ).toHaveAttribute('href', '/blog/on-craftsmanship');
  });

  it('marks drafts.', () => {
    render(<BlogIndexPage posts={[makePost({ isDraft: true })]} />);

    expect(screen.getByText('Draft')).toBeInTheDocument();
  });

  it('says so when there are no posts yet.', () => {
    render(<BlogIndexPage posts={[]} />);

    expect(screen.getByText('No posts yet.')).toBeInTheDocument();
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
