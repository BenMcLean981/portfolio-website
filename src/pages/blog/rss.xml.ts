import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { loadBlogPosts } from '../../app/blog';
import { listFeedItems } from '../../lib/blog/list-feed-items';

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('Set `site` in astro.config.mjs to build the RSS feed.');
  }

  const items = listFeedItems(await loadBlogPosts());

  return rss({
    title: 'Ben McLean',
    description:
      'Writing on software craftsmanship and engineering principles.',
    // The channel links to the blog; item paths are absolute, so they
    // still resolve from the domain root.
    site: new URL('/blog', site),
    trailingSlash: false,
    customData: '<language>en-us</language>',
    items: items.map((item) => ({
      title: item.title,
      description: item.description,
      link: item.path,
      pubDate: item.published,
    })),
  });
};
