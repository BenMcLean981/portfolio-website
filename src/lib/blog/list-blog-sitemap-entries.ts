import { type SitemapEntry } from '../seo/sitemap';
import { type BlogPost } from './blog-post';
import { getPublishedPosts } from './list-posts';

/**
 * The sitemap entries for the blog index and each published post. Drafts are
 * left out even on preview builds that show them.
 */
export function listBlogSitemapEntries(
  posts: ReadonlyArray<BlogPost>,
  baseUrl: string
): ReadonlyArray<SitemapEntry> {
  return [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...getPublishedPosts(posts).map((post) => toSitemapEntry(post, baseUrl)),
  ];
}

function toSitemapEntry(post: BlogPost, baseUrl: string): SitemapEntry {
  return {
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: getLastModified(post),
    changeFrequency: 'monthly',
    priority: 0.6,
  };
}

function getLastModified(post: BlogPost): Date {
  const lastModified = post.updated ?? post.published;

  if (lastModified === undefined) {
    throw new Error(`The post "${post.slug}" has no published date.`);
  }

  return lastModified;
}
