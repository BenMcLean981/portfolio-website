import { type PropsWithChildren } from 'react';

export function UnorderedList(props: PropsWithChildren) {
  return <ul className="ml-6 list-disc">{props.children}</ul>;
}
