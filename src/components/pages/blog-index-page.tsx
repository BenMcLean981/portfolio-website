import { FaRss } from 'react-icons/fa6';
import { type BlogPost } from '../../lib/blog/blog-post';
import { PostList } from '../blog/post-list';
import { H1 } from '../typography/headings';

export type BlogIndexPageProps = {
  posts: ReadonlyArray<BlogPost>;
};

export function BlogIndexPage(props: BlogIndexPageProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <H1>Blog</H1>
        <FeedLink />
      </div>
      <PostList posts={props.posts} />
    </div>
  );
}

function FeedLink() {
  return (
    <a
      href="/blog/rss.xml"
      aria-label="RSS feed"
      className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent-text"
    >
      <FaRss aria-hidden className="size-3.5" />
      RSS
    </a>
  );
}
