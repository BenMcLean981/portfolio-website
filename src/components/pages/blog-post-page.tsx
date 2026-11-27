import { type PropsWithChildren } from 'react';
import { type BlogPost } from '../../lib/blog/blog-post';
import { formatPostDate } from '../../lib/blog/format-post-date';

export type BlogPostPageProps = PropsWithChildren<{
  post: BlogPost;
}>;

export function BlogPostPage(props: BlogPostPageProps) {
  const { post } = props;

  return (
    <article className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,1fr)_19rem]">
      <div>
        <header className="mb-10 border-b border-line pb-8">
          <h1 className="text-[clamp(2rem,4vw,2.75rem)] leading-tight font-medium tracking-[-0.02em] text-strong">
            {post.title}
          </h1>
          <p className="mt-3 max-w-[42rem] text-lg leading-relaxed text-muted">
            {post.description}
          </p>
        </header>
        <div className="post-body max-w-[42rem]">{props.children}</div>
      </div>
      <aside className="lg:pt-3">
        <PostDetails post={post} />
      </aside>
    </article>
  );
}

type PostDetailsProps = {
  post: BlogPost;
};

function PostDetails(props: PostDetailsProps) {
  const { post } = props;

  return (
    <dl className="flex flex-col gap-4 text-sm lg:sticky lg:top-24">
      {post.isDraft && (
        <div>
          <span className="rounded-md bg-accent/12 px-1.5 py-0.5 text-xs font-medium text-accent-text ring-1 ring-accent/30 ring-inset">
            Draft
          </span>
        </div>
      )}
      {post.published && (
        <Detail label="Published">
          <time dateTime={post.published.toISOString()}>
            {formatPostDate(post.published)}
          </time>
        </Detail>
      )}
      {post.updated && (
        <Detail label="Updated">
          <time dateTime={post.updated.toISOString()}>
            {formatPostDate(post.updated)}
          </time>
        </Detail>
      )}
      {post.tags.length > 0 && (
        <Detail label="Tags">
          <TagLinks tags={post.tags} />
        </Detail>
      )}
    </dl>
  );
}

type TagLinksProps = {
  tags: ReadonlyArray<string>;
};

function TagLinks(props: TagLinksProps) {
  return (
    <ul className="mt-1 flex flex-wrap gap-1.5">
      {props.tags.map((tag) => (
        <li key={tag}>
          <a
            href={`/blog/tags/${tag}`}
            className="inline-block rounded-md border border-line px-1.5 py-0.5 text-xs text-body transition-colors hover:border-accent/50 hover:text-accent-text"
          >
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
}

type DetailProps = PropsWithChildren<{
  label: string;
}>;

function Detail(props: DetailProps) {
  return (
    <div>
      <dt className="text-muted">{props.label}</dt>
      <dd className="mt-0.5 text-body">{props.children}</dd>
    </div>
  );
}
