import { AstroContentBlogPostRepository } from '../adapters/astro/astro-content-blog-post-repository';
import { readBuildEnvironment } from '../adapters/astro/read-build-environment';
import { renderBlogPost } from '../adapters/astro/render-blog-post';
import { type BlogPost } from '../lib/blog/blog-post';
import { loadVisiblePosts } from '../lib/blog/load-visible-posts';

/**
 * The blog's composition root. It wires the Astro adapters into the blog's
 * own logic and returns the posts this build should show.
 */
export function loadBlogPosts(): Promise<ReadonlyArray<BlogPost>> {
  return loadVisiblePosts(
    new AstroContentBlogPostRepository(),
    readBuildEnvironment()
  );
}

/** Renders a post's body. Only .astro pages can display the result. */
export { renderBlogPost };
