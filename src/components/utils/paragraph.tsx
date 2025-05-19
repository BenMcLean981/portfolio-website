import { type PropsWithChildren } from 'react';

export function Paragraph(props: PropsWithChildren) {
  return (
    <p className="text-xl font-medium dark:text-white">{props.children}</p>
  );
}
