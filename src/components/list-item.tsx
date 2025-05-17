import { type PropsWithChildren } from 'react';

export function ListItem(props: PropsWithChildren) {
  return (
    <li className="text-xl font-medium dark:text-white">{props.children}</li>
  );
}
