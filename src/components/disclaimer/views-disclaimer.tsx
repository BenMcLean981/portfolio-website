import { FaCircleInfo } from 'react-icons/fa6';

export function ViewsDisclaimer() {
  return (
    <div
      role="note"
      className="flex items-start gap-3 rounded-xl border border-info/50 bg-info/15 px-4 py-3 text-[0.9375rem] leading-relaxed text-info-text"
    >
      <FaCircleInfo
        size={16}
        aria-hidden="true"
        className="mt-[0.3rem] shrink-0 text-info"
      />
      <p>
        <strong className="font-semibold">
          The views expressed on this website are mine alone
        </strong>{' '}
        and do not necessarily reflect the views of my employer.
      </p>
    </div>
  );
}
