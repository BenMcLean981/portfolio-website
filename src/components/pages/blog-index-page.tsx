import { FaRss } from 'react-icons/fa6';
import { type BlogPost } from '../../lib/blog/blog-post';
import { formatPostDate } from '../../lib/blog/format-post-date';
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

function PostList(props: BlogIndexPageProps) {
  if (props.posts.length === 0) {
    return <p className="mt-8 text-muted">No posts yet.</p>;
  }

  return (
    <ol className="mt-8 flex flex-col">
      {props.posts.map((post) => (
        <li key={post.slug} className="border-t border-line py-6">
          <PostSummary post={post} />
        </li>
      ))}
    </ol>
  );
}

type PostSummaryProps = {
  post: BlogPost;
};

function PostSummary(props: PostSummaryProps) {
  const { post } = props;

  return (
    <article className="grid grid-cols-1 gap-x-12 gap-y-1 sm:grid-cols-[10rem_minmax(0,1fr)]">
      <div className="flex items-center gap-2 text-sm text-muted sm:flex-col sm:items-start sm:pt-1.5">
        {post.published && (
          <time dateTime={post.published.toISOString()}>
            {formatPostDate(post.published)}
          </time>
        )}
        {post.isDraft && (
          <span className="rounded-md bg-accent/12 px-1.5 py-0.5 text-xs font-medium text-accent-text ring-1 ring-accent/30 ring-inset">
            Draft
          </span>
        )}
      </div>
      <div>
        <h2 className="text-xl font-medium text-strong">
          <a
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-accent-text"
          >
            {post.title}
          </a>
        </h2>
        <p className="mt-2 max-w-[42rem] leading-[1.7]">{post.description}</p>
      </div>
    </article>
  );
}
