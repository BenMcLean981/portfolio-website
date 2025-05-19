import { type PropsWithChildren } from "react";

export interface AnchorProps {
  href: string;

  newWindow?: boolean;
}

export function Anchor(props: PropsWithChildren<AnchorProps>) {
  const { href, newWindow } = props;

  if (newWindow) {
    return (
      <a
        className="underline text-blue-500"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    );
  } else {
    return (
      <a className="underline text-blue-500" href={href}>
        {props.children}
      </a>
    );
  }
}
