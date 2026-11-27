import { type BlogPost } from '../../lib/blog/blog-post';
import { BlogHeader } from '../blog/blog-header';
import { PostList } from '../blog/post-list';

export type BlogIndexPageProps = {
  posts: ReadonlyArray<BlogPost>;
};

export function BlogIndexPage(props: BlogIndexPageProps) {
  return (
    <div>
      <BlogHeader>Blog</BlogHeader>
      <PostList posts={props.posts} />
    </div>
  );
}
