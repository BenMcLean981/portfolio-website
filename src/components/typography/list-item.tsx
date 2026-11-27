import { type PropsWithChildren } from 'react';

export function ListItem(props: PropsWithChildren) {
  return (
    <li className="pl-1 leading-[1.7] text-body">
      {props.children}
    </li>
  );
}
