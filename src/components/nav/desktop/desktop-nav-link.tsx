import Link from 'next/link';
import { type PropsWithChildren } from 'react';
import { ButtonContainer } from '../button-container';
import { type NavRoute } from '../nav-route';

export interface DesktopNavLinkProps {
  route: NavRoute;
}

export function DesktopNavLink(props: PropsWithChildren<DesktopNavLinkProps>) {
  return (
    <div>
      <Link
        href={props.route.path}
        className="flex justify-center align-middle items-center "
      >
        {props.children}
        <ButtonContainer>{props.route.name}</ButtonContainer>
      </Link>
    </div>
  );
}
