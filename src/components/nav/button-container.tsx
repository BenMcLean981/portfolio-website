import { type PropsWithChildren } from 'react';

export function ButtonContainer(props: PropsWithChildren) {
  return (
    <span className="inline-flex cursor-pointer items-center rounded-lg fill-current px-3 py-1.5 text-[0.9375rem] text-muted transition-colors hover:bg-strong/5 hover:text-strong">
      {props.children}
    </span>
  );
}
