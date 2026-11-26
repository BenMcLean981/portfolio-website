export type PartMarkProps = {
  size?: number;
};

/** A small nest: two parts cut from one plate. Used as the logo. */
export function PartMark(props: PartMarkProps) {
  const size = props.size ?? 30;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="13" height="24" rx="1" />
      <circle cx="24" cy="10" r="4.5" />
      <rect x="20" y="18" width="8" height="10" rx="1" />
    </svg>
  );
}
