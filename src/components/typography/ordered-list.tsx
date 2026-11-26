import { type PropsWithChildren } from 'react';

export function OrderedList(props: PropsWithChildren) {
  return (
    <ol className="mb-5 ml-6 list-decimal marker:text-ink-soft">
      {props.children}
    </ol>
  );
}
