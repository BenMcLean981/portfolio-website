import { type BlogPost } from './blog-post';

/** Gives the blog its posts. The blog owns this; adapters implement it. */
export interface BlogPostRepository {
  getPosts(): Promise<ReadonlyArray<BlogPost>>;
}
