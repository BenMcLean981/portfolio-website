import { type PropsWithChildren } from 'react';

export function OrderedList(props: PropsWithChildren) {
  return (
    <ol className="mb-5 ml-6 list-decimal marker:text-muted marker:tabular-nums">
      {props.children}
    </ol>
  );
}
