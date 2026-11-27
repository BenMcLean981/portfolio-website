import { type BlogPost } from '../../lib/blog/blog-post';
import { BlogHeader } from '../blog/blog-header';
import { PostList } from '../blog/post-list';

export type BlogTagPageProps = {
  tag: string;
  posts: ReadonlyArray<BlogPost>;
};

export function BlogTagPage(props: BlogTagPageProps) {
  return (
    <div>
      <BlogHeader>Posts tagged {props.tag}</BlogHeader>
      <PostList posts={props.posts} />
    </div>
  );
}
