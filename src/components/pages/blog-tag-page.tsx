import { type BlogPost } from '../../lib/blog/blog-post';
import { PostList } from '../blog/post-list';
import { H1 } from '../typography/headings';

export type BlogTagPageProps = {
  tag: string;
  posts: ReadonlyArray<BlogPost>;
};

export function BlogTagPage(props: BlogTagPageProps) {
  return (
    <div>
      <H1>Posts tagged {props.tag}</H1>
      <PostList posts={props.posts} />
    </div>
  );
}
