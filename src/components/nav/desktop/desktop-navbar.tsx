import Image from 'next/image';
import { DarkModeSwitch } from '../../dark-mode-switch/dark-mode-switch';
import { ButtonContainer } from '../button-container';
import { ContactCard } from '../contact-modal';
import type { NavRoute } from '../nav-route';
import { DesktopNavLink } from './desktop-nav-link';

export type DesktopNavbarProps = {
  homeRoute: NavRoute;

  routes: ReadonlyArray<NavRoute>;
};

export function DesktopNavbar(props: DesktopNavbarProps) {
  const { routes, homeRoute } = props;

  return (
    <div className="flex justify-between items-center px-4">
      <div className="hidden md:flex justify-center align-middle space-x-7 items-center gap-2">
        <DesktopNavLink route={homeRoute}>
          <Image
            src="/favicon.ico"
            alt="Logo"
            className={'mr-2'}
            width={32}
            height={32}
          />
        </DesktopNavLink>

        {routes.map((route) => (
          <DesktopNavLink key={route.path} route={route} />
        ))}
      </div>

      <div className="flex justify-end w-full md:w-auto items-center gap-x-6 my-6">
        <ContactCard>
          <ButtonContainer>Contact</ButtonContainer>
        </ContactCard>
        <DarkModeSwitch />
      </div>
    </div>
  );
}
