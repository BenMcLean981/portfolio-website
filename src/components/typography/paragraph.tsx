import { type PropsWithChildren } from 'react';

export function Paragraph(props: PropsWithChildren) {
  return (
    <p className="mb-5 max-w-[40rem] text-[1.1875rem] leading-[1.7] text-ink">
      {props.children}
    </p>
  );
}
