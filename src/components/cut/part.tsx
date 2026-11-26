import { type PropsWithChildren } from 'react';

export type PartProps = PropsWithChildren<{
  /** Grid placement, e.g. 'lg:col-span-7'. Parts span the full width below lg. */
  className?: string;
}>;

export function Part(props: PartProps) {
  return (
    <section
      className={`col-span-12 bg-plate p-6 sm:p-8 lg:p-10 ${props.className ?? ''}`}
    >
      {props.children}
    </section>
  );
}
