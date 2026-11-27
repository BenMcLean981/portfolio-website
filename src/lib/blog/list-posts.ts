import { type BlogPost } from './blog-post';

export function getPublishedPosts(
  posts: ReadonlyArray<BlogPost>
): ReadonlyArray<BlogPost> {
  return posts.filter((post) => !post.draft).toSorted(compareNewestFirst);
}

function compareNewestFirst(a: BlogPost, b: BlogPost): number {
  return getTime(b) - getTime(a);
}

function getTime(post: BlogPost): number {
  return post.published?.getTime() ?? 0;
}
