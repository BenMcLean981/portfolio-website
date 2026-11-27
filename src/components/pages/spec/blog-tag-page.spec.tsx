import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { type BlogPost } from '../../../lib/blog/blog-post';
import { BlogTagPage } from '../blog-tag-page';

describe('BlogTagPage', () => {
  it('names the tag and lists its posts.', () => {
    render(
      <BlogTagPage
        tag="craft"
        posts={[
          makePost({ slug: 'on-craftsmanship', title: 'On craftsmanship' }),
        ]}
      />
    );

    expect(
      screen.getByRole('heading', { level: 1, name: 'Posts tagged craft' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'On craftsmanship' })
    ).toHaveAttribute('href', '/blog/on-craftsmanship');
  });

  it('links to the RSS feed.', () => {
    render(<BlogTagPage tag="craft" posts={[]} />);

    expect(screen.getByRole('link', { name: 'RSS feed' })).toHaveAttribute(
      'href',
      '/blog/rss.xml'
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
