import { type PropsWithChildren } from 'react';

export function ListItem(props: PropsWithChildren) {
  return (
    <li className="pl-1 text-[1.1875rem] leading-[1.7] text-ink">
      {props.children}
    </li>
  );
}
