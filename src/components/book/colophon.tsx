export type ColophonProps = {
  buildHash: string | null;
  builtOn: Date;
};

const REPOSITORY = 'https://github.com/BenMcLean981/portfolio-website';

/**
 * A book's colophon says how it was made. This one names the typeface and
 * the commit the page was built from.
 */
export function Colophon(props: ColophonProps) {
  const { buildHash, builtOn } = props;

  const date = builtOn.toLocaleDateString('en-CA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <div className="max-w-[40rem] text-sm leading-relaxed text-ink-soft">
      <h2 className="mb-1 italic text-ink">Colophon</h2>
      <p>
        Set in Literata. Built with Astro and deployed to Cloudflare from{' '}
        {buildHash ? (
          <>
            commit{' '}
            <a
              className="lining text-cloth underline decoration-rule underline-offset-2 hover:decoration-cloth"
              href={`${REPOSITORY}/commit/${buildHash}`}
            >
              {buildHash.slice(0, 7)}
            </a>
          </>
        ) : (
          'a local build'
        )}{' '}
        on {date}.
      </p>
      <p className="mt-2">
        The views expressed on this website are mine alone and do not
        necessarily reflect the views of my employer.
      </p>
    </div>
  );
}
