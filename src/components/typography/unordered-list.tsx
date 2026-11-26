import { type PropsWithChildren } from 'react';

export function UnorderedList(props: PropsWithChildren) {
  return (
    <ul className="mb-4 ml-5 list-[square] marker:text-straw">
      {props.children}
    </ul>
  );
}
