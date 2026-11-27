export type TagLinksProps = {
  tags: ReadonlyArray<string>;
};

export function TagLinks(props: TagLinksProps) {
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
