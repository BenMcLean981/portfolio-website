import { type PropsWithChildren } from 'react';

export function Paragraph(props: PropsWithChildren) {
  return (
    <p className="mb-4 max-w-[68ch] text-lg leading-relaxed text-ink">
      {props.children}
    </p>
  );
}
