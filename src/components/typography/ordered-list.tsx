import { type PropsWithChildren } from 'react';

export function OrderedList(props: PropsWithChildren) {
  return <ol className="list-decimal ml-6">{props.children}</ol>;
}
