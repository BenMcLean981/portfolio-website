import { getCollection } from 'astro:content';
import { type BlogPost } from '../../lib/blog/blog-post';
import { type BlogPostRepository } from '../../lib/blog/blog-post-repository';
import { mapEntryToBlogPost } from './map-entry-to-blog-post';

/** Reads posts from the Astro content collection in src/content/blog. */
export class AstroContentBlogPostRepository implements BlogPostRepository {
  public async getPosts(): Promise<ReadonlyArray<BlogPost>> {
    const entries = await getCollection('blog');

    return entries.map(mapEntryToBlogPost);
  }
}
