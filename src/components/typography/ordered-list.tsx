import { type PropsWithChildren } from 'react';

export function OrderedList(props: PropsWithChildren) {
  return (
    <ol className="mb-4 ml-6 list-decimal marker:text-edge-soft">
      {props.children}
    </ol>
  );
}
