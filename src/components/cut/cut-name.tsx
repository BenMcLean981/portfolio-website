/**
 * The name, cut out of the plate. See .cut-path in globals.css for the
 * trace, slug and cooling animation.
 */
export function CutName() {
  return (
    <svg
      viewBox="0 0 560 330"
      className="w-full max-w-[44rem] overflow-visible"
      role="img"
      aria-label="Ben McLean"
    >
      <g
        className="cut-path"
        style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700 }}
        fontSize={176}
        strokeWidth={2.5}
        strokeLinejoin="round"
      >
        <text x="0" y="146">
          Ben
        </text>
        <text x="0" y="316">
          McLean
        </text>
      </g>
    </svg>
  );
}
