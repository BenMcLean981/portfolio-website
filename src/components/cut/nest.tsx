import { type PropsWithChildren } from 'react';

/**
 * A plate of parts. The gaps between parts are kerf, the strip of metal the
 * torch removes, so they're drawn darker than the parts themselves.
 */
export function Nest(props: PropsWithChildren) {
  return (
    <div className="grid grid-cols-12 gap-[6px] bg-kerf p-[6px]">
      {props.children}
    </div>
  );
}
