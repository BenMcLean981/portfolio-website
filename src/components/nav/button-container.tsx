import { type PropsWithChildren } from 'react';

export function ButtonContainer(props: PropsWithChildren) {
  return (
    <span className="lettering cursor-pointer fill-current text-[1.05rem] font-medium text-ink-soft transition-colors hover:text-redline">
      {props.children}
    </span>
  );
}
