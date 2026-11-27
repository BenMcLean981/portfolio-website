import { type PropsWithChildren } from 'react';

export interface AnchorProps {
  href: string;

  newWindow?: boolean;
}

const CLASS_NAME =
  'text-accent-text underline decoration-accent/40 decoration-1 underline-offset-[3px] transition-colors hover:decoration-accent';

export function Anchor(props: PropsWithChildren<AnchorProps>) {
  const { href, newWindow } = props;

  if (newWindow) {
    return (
      <a className={CLASS_NAME} href={href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    );
  } else {
    return (
      <a className={CLASS_NAME} href={href}>
        {props.children}
      </a>
    );
  }
}
