import { type PropsWithChildren } from 'react';
import { FaRss } from 'react-icons/fa6';
import { H1 } from '../typography/headings';

/** The heading row shared by the blog's list pages, with the RSS link. */
export function BlogHeader(props: PropsWithChildren) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <H1>{props.children}</H1>
      <FeedLink />
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
