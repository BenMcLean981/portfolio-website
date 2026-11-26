import { type PropsWithChildren } from 'react';

export function ButtonContainer(props: PropsWithChildren) {
  return (
    <span className="small-caps cursor-pointer fill-current text-[1.05rem] text-ink-soft transition-colors hover:text-ink">
      {props.children}
    </span>
  );
}
