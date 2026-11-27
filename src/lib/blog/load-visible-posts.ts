import { type BuildEnvironment } from '../build-info/build-info';
import { type BlogPost } from './blog-post';
import { type BlogPostRepository } from './blog-post-repository';
import { listVisiblePosts } from './list-visible-posts';

export async function loadVisiblePosts(
  repository: BlogPostRepository,
  env: BuildEnvironment
): Promise<ReadonlyArray<BlogPost>> {
  return listVisiblePosts(await repository.getPosts(), env);
}
