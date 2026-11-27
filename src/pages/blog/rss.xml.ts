import type { APIRoute } from 'astro';
import { loadBlogPosts } from '../../app/blog';
import { renderBlogFeed } from '../../lib/blog/render-blog-feed';

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('Set `site` in astro.config.mjs to build the RSS feed.');
  }

  return new Response(renderBlogFeed(await loadBlogPosts(), site.origin), {
    headers: { 'Content-Type': 'application/rss+xml' },
  });
};
