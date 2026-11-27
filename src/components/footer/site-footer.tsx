export type SiteFooterProps = {
  buildHash: string | null;
};

const REPOSITORY = 'https://github.com/BenMcLean981/portfolio-website';

export function SiteFooter(props: SiteFooterProps) {
  return (
    <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:justify-between sm:gap-8">
      <p className="max-w-xl">
        The views expressed on this website are mine alone and do not
        necessarily reflect the views of my employer.
      </p>
      <p className="shrink-0">
        <BuildLabel buildHash={props.buildHash} />
      </p>
    </div>
  );
}

function BuildLabel(props: SiteFooterProps) {
  if (props.buildHash === null) {
    return <>Local build</>;
  }

  return (
    <>
      Built from{' '}
      <a
        className="tabular-nums text-accent-text underline decoration-accent/40 underline-offset-[3px] transition-colors hover:decoration-accent"
        href={`${REPOSITORY}/commit/${props.buildHash}`}
      >
        {props.buildHash.slice(0, 7)}
      </a>
    </>
  );
}
