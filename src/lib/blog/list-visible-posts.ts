import { type BuildEnvironment } from '../build-info/build-info';
import { type BlogPost } from './blog-post';
import { getAllPosts, getPublishedPosts } from './list-posts';

export function listVisiblePosts(
  posts: ReadonlyArray<BlogPost>,
  env: BuildEnvironment
): ReadonlyArray<BlogPost> {
  return env.WORKERS_CI_BRANCH === undefined
    ? getPublishedPosts(posts)
    : getAllPosts(posts);
}
