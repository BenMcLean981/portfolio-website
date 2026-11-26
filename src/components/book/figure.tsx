import { type ReactNode } from 'react';

export type FigureProps = {
  number: number;
  caption: ReactNode;
  children: ReactNode;
};

export function Figure(props: FigureProps) {
  return (
    <figure>
      {props.children}
      <figcaption className="mt-2 text-sm leading-snug text-ink-soft">
        <span className="small-caps text-ink">Fig. {props.number}</span>{' '}
        <span className="italic">{props.caption}</span>
      </figcaption>
    </figure>
  );
}
