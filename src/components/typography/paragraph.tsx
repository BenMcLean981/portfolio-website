import { type PropsWithChildren } from 'react';

export function Paragraph(props: PropsWithChildren) {
  return (
    <p className="mb-4 max-w-[42rem] leading-[1.7] text-body">
      {props.children}
    </p>
  );
}
