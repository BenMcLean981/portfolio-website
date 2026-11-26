import { type PropsWithChildren, type ReactNode } from 'react';

export type SpreadProps = PropsWithChildren<{
  margin?: ReactNode;
}>;

/**
 * A reading column with a margin beside it for figures and notes, as in a
 * book. On narrow screens the margin content follows the column.
 */
export function Spread(props: SpreadProps) {
  return (
    <div className="grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,40rem)_15rem]">
      <div>{props.children}</div>
      {props.margin && <aside className="lg:pt-1">{props.margin}</aside>}
    </div>
  );
}
