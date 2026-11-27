import { type BlogPost } from './blog-post';
import { getPublishedPosts } from './list-posts';

/** The blog's RSS 2.0 feed, newest post first. Drafts are never included. */
export function renderBlogFeed(
  posts: ReadonlyArray<BlogPost>,
  baseUrl: string
): string {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '<channel>',
    '<title>Ben McLean</title>',
    `<link>${baseUrl}/blog</link>`,
    '<description>Writing on software craftsmanship and engineering principles.</description>',
    '<language>en-us</language>',
    ...getPublishedPosts(posts).flatMap((post) => renderItem(post, baseUrl)),
    '</channel>',
    '</rss>',
    '',
  ].join('\n');
}

function renderItem(post: BlogPost, baseUrl: string): ReadonlyArray<string> {
  const url = `${baseUrl}/blog/${post.slug}`;

  return [
    '<item>',
    `<title>${escapeXml(post.title)}</title>`,
    `<link>${url}</link>`,
    `<guid>${url}</guid>`,
    `<description>${escapeXml(post.description)}</description>`,
    `<pubDate>${getPublishedDate(post).toUTCString()}</pubDate>`,
    '</item>',
  ];
}

const XML_ENTITIES: Readonly<Record<string, string>> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
};

function escapeXml(text: string): string {
  return text.replace(/[&<>"']/g, (character) => XML_ENTITIES[character] ?? '');
}

function getPublishedDate(post: BlogPost): Date {
  if (post.published === undefined) {
    throw new Error(`The post "${post.slug}" has no published date.`);
  }

  return post.published;
}
