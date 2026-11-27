import { type BlogPost } from './blog-post';

export function getPublishedPosts(
  posts: ReadonlyArray<BlogPost>
): ReadonlyArray<BlogPost> {
  return posts.filter((post) => !post.draft);
}
