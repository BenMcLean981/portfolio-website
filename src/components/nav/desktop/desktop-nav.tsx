import Image from 'next/image';
import { type NavRoute } from '../nav-route';
import { DesktopNavLink } from './desktop-nav-link';

interface Props {
  homeRoute: NavRoute;
  routes: NavRoute[];
}

export function DesktopNav(props: Props) {
  return (
    <div className="hidden md:flex justify-center align-middle space-x-7 items-center gap-2">
      <DesktopNavLink route={props.homeRoute}>
        <Image
          src="/favicon.ico"
          alt="Logo"
          className={'mr-2'}
          width={32}
          height={32}
        />
      </DesktopNavLink>

      {props.routes.map((route) => (
        <DesktopNavLink key={route.path} route={route} />
      ))}
    </div>
  );
}
