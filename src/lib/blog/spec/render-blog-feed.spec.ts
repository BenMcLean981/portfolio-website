import { describe, expect, it } from 'vitest';
import { type BlogPost } from '../blog-post';
import { renderBlogFeed } from '../render-blog-feed';

const BASE_URL = 'https://example.com';

describe('renderBlogFeed', () => {
  it('describes the blog as an RSS channel.', () => {
    const xml = renderBlogFeed([], BASE_URL);

    expect(xml).toBe(
      [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0">',
        '<channel>',
        '<title>Ben McLean</title>',
        '<link>https://example.com/blog</link>',
        '<description>Writing on software craftsmanship and engineering principles.</description>',
        '<language>en-us</language>',
        '</channel>',
        '</rss>',
        '',
      ].join('\n')
    );
  });

  it('lists each post as an item.', () => {
    const post = makePost({
      slug: 'on-craftsmanship',
      title: 'On craftsmanship',
      description: 'Why care matters.',
      published: new Date('2026-03-01'),
    });

    const xml = renderBlogFeed([post], BASE_URL);

    expect(xml).toContain(
      [
        '<item>',
        '<title>On craftsmanship</title>',
        '<link>https://example.com/blog/on-craftsmanship</link>',
        '<guid>https://example.com/blog/on-craftsmanship</guid>',
        '<description>Why care matters.</description>',
        '<pubDate>Sun, 01 Mar 2026 00:00:00 GMT</pubDate>',
        '</item>',
      ].join('\n')
    );
  });

  it('leaves out drafts.', () => {
    const draft = makePost({ isDraft: true, published: undefined });

    expect(renderBlogFeed([draft], BASE_URL)).not.toContain('<item>');
  });

  it('escapes characters that would break the XML.', () => {
    const post = makePost({
      title: 'Tests & types',
      description: 'When <T> means "anything".',
    });

    const xml = renderBlogFeed([post], BASE_URL);

    expect(xml).toContain('<title>Tests &amp; types</title>');
    expect(xml).toContain(
      '<description>When &lt;T&gt; means &quot;anything&quot;.</description>'
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
