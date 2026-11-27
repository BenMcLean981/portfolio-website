import { type BlogPost } from '../../lib/blog/blog-post';
import { formatPostDate } from '../../lib/blog/format-post-date';
import { H1 } from '../typography/headings';

export type BlogIndexPageProps = {
  posts: ReadonlyArray<BlogPost>;
};

export function BlogIndexPage(props: BlogIndexPageProps) {
  return (
    <div className="max-w-[42rem]">
      <H1>Blog</H1>
      <PostList posts={props.posts} />
    </div>
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
    <article>
      <div className="flex items-center gap-2 text-sm text-muted">
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
      <h2 className="mt-1 text-xl font-medium text-strong">
        <a
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-accent-text"
        >
          {post.title}
        </a>
      </h2>
      <p className="mt-2 leading-[1.7]">{post.description}</p>
    </article>
  );
}
