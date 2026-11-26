import { type PropsWithChildren } from 'react';

export function Paragraph(props: PropsWithChildren) {
  return (
    <p className="mb-4 max-w-[64ch] text-[1.0625rem] leading-relaxed text-edge">
      {props.children}
    </p>
  );
}
