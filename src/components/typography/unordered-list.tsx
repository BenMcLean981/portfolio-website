import { type PropsWithChildren } from 'react';

export function UnorderedList(props: PropsWithChildren) {
  return (
    <ul className="mb-5 ml-5 list-disc marker:text-ink-soft">
      {props.children}
    </ul>
  );
}
