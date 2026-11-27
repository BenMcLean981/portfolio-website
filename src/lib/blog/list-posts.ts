import { type BlogPost } from './blog-post';

export function getPublishedPosts(
  posts: ReadonlyArray<BlogPost>
): ReadonlyArray<BlogPost> {
  return posts.filter((post) => !post.draft).toSorted(compareNewestFirst);
}

export function getAllPosts(
  posts: ReadonlyArray<BlogPost>
): ReadonlyArray<BlogPost> {
  return posts.toSorted(compareNewestFirst);
}

function compareNewestFirst(a: BlogPost, b: BlogPost): number {
  return getTime(b) - getTime(a);
}

// An undated draft is still being written, so it counts as the newest.
function getTime(post: BlogPost): number {
  return post.published?.getTime() ?? Number.POSITIVE_INFINITY;
}
