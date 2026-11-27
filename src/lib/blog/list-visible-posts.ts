import { type BuildEnvironment } from '../build-info/build-info';
import { type BlogPost } from './blog-post';
import { getAllPosts, getPublishedPosts } from './list-posts';

export function listVisiblePosts(
  posts: ReadonlyArray<BlogPost>,
  env: BuildEnvironment
): ReadonlyArray<BlogPost> {
  return isPreviewBuild(env) ? getAllPosts(posts) : getPublishedPosts(posts);
}

const PRODUCTION_BRANCH = 'main';

function isPreviewBuild(env: BuildEnvironment): boolean {
  const branch = env.WORKERS_CI_BRANCH;

  return branch !== undefined && branch !== PRODUCTION_BRANCH;
}
