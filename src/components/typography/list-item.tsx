import { type PropsWithChildren } from 'react';

export function ListItem(props: PropsWithChildren) {
  return (
    <li className="pl-1 text-[1.0625rem] leading-relaxed text-edge">
      {props.children}
    </li>
  );
}
