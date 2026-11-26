import { type PropsWithChildren } from 'react';

export function ListItem(props: PropsWithChildren) {
  return (
    <li className="pl-1 text-lg leading-relaxed text-ink">{props.children}</li>
  );
}
