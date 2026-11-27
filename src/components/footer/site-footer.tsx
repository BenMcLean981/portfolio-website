export type SiteFooterProps = {
  buildHash: string | null;
};

const REPOSITORY = 'https://github.com/BenMcLean981/portfolio-website';

export function SiteFooter(props: SiteFooterProps) {
  return (
    <p className="text-right text-sm text-muted">
      <BuildLabel buildHash={props.buildHash} />
    </p>
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
