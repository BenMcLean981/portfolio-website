export type ProjectionMarkProps = {
  size?: number;
};

/**
 * The third-angle projection symbol that sits in a drawing's title block:
 * a truncated cone seen end-on (two circles) and side-on (a trapezoid).
 */
export function ProjectionMark(props: ProjectionMarkProps) {
  const size = props.size ?? 32;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <circle cx="9" cy="16" r="6.5" />
      <circle cx="9" cy="16" r="3" />
      <path d="M18 12.75 L29 9.5 V22.5 L18 19.25 Z" strokeLinejoin="round" />
    </svg>
  );
}
