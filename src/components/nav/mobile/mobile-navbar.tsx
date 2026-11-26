import { useRef, useState } from 'react';
import { useOutsideAlerter } from '../../../hooks/use-outside-alerter';
import { DarkModeSwitch } from '../../dark-mode-switch/dark-mode-switch';
import { ButtonContainer } from '../button-container';
import { ContactCard } from '../contact-modal';
import { HomeLink } from '../home-link';
import type { NavRoute } from '../nav-route';
import { MobileNavDropdown } from './mobile-nav-dropdown';
import { MobileNavDropdownButton } from './mobile-nav-dropdown-button';

export type MobileNavbarProps = {
  homeRoute: NavRoute;

  routes: ReadonlyArray<NavRoute>;
};

export function MobileNavbar(props: MobileNavbarProps) {
  const { routes, homeRoute } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  function forceClose() {
    setMobileOpen(false);
  }

  useOutsideAlerter(dropdownRef, forceClose);

  return (
    <>
      <div className="flex items-center justify-between gap-4 px-1 py-4">
        <HomeLink route={homeRoute} />

        <div className="flex items-center gap-x-5">
          <ContactCard>
            <ButtonContainer>Contact</ButtonContainer>
          </ContactCard>
          <DarkModeSwitch />
          <MobileNavDropdownButton handleToggle={() => setMobileOpen(true)} />
        </div>
      </div>
      {mobileOpen && (
        <div
          className="mobile-menu border-t border-kerf md:hidden"
          ref={dropdownRef}
        >
          <MobileNavDropdown routes={routes} />
        </div>
      )}
    </>
  );
}
