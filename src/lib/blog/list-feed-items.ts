import { type BlogPost } from './blog-post';
import { getPublishedPosts } from './list-posts';

export type FeedItem = {
  title: string;
  description: string;
  path: string;
  published: Date;
};

export function listFeedItems(
  posts: ReadonlyArray<BlogPost>
): ReadonlyArray<FeedItem> {
  return getPublishedPosts(posts).map(toFeedItem);
}

function toFeedItem(post: BlogPost): FeedItem {
  return {
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    published: getPublishedDate(post),
  };
}

function getPublishedDate(post: BlogPost): Date {
  if (post.published === undefined) {
    throw new Error(`The post "${post.slug}" has no published date.`);
  }

  return post.published;
}
