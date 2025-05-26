import Image from 'next/image';
import { useRef, useState } from 'react';
import { useOutsideAlerter } from '../../../hooks/use-outside-alerter';
import { DarkModeSwitch } from '../../dark-mode-switch/dark-mode-switch';
import { ButtonContainer } from '../button-container';
import { ContactCard } from '../contact-modal';
import { DesktopNavLink } from '../desktop/desktop-nav-link';
import type { NavRoute } from '../nav-route';
import { MobileNavDropdown } from './mobile-nav-dropdown';

export type MobileNavbarProps = {
  homeRoute: NavRoute;

  routes: ReadonlyArray<NavRoute>;
};

export function MobileNavbar(props: MobileNavbarProps) {
  const { routes, homeRoute } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  function forceClose() {
    setMobileOpen(false);
  }

  useOutsideAlerter(navRef, forceClose);

  return (
    <>
      <div className="flex justify-between items-center px-4" ref={navRef}>
        <DesktopNavLink route={homeRoute}>
          <Image
            src="/favicon.ico"
            alt="Logo"
            className={'mr-2'}
            width={32}
            height={32}
          />
        </DesktopNavLink>

        <div className="flex justify-end w-full md:w-auto items-center gap-x-6 my-6">
          <ContactCard>
            <ButtonContainer>Contact</ButtonContainer>
          </ContactCard>
          <DarkModeSwitch />
        </div>
      </div>
      {mobileOpen && (
        <div className="mobile-menu md:hidden border-t border-t-neutral-400 border-b dark:border-b-neutral-400">
          <MobileNavDropdown routes={routes} />
        </div>
      )}
    </>
  );
}
