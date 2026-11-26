import { type PropsWithChildren } from 'react';

export function ButtonContainer(props: PropsWithChildren) {
  return (
    <span className="cursor-pointer fill-current font-[family-name:var(--font-condensed)] text-xl font-semibold text-edge-soft transition-colors hover:text-edge">
      {props.children}
    </span>
  );
}
