import { type BlogPost } from './blog-post';

export function listTags(
  posts: ReadonlyArray<BlogPost>
): ReadonlyArray<string> {
  return [...new Set(posts.flatMap((post) => post.tags))].toSorted();
}

export function getPostsTagged(
  posts: ReadonlyArray<BlogPost>,
  tag: string
): ReadonlyArray<BlogPost> {
  return posts.filter((post) => post.tags.includes(tag));
}
