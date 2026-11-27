import { useRef, useState } from 'react';
import { useOutsideAlerter } from '../../../hooks/use-outside-alerter';
import { DarkModeSwitch } from '../../dark-mode-switch/dark-mode-switch';
import { ContactButton } from '../contact-button';
import { HomeLink } from '../home-link';
import type { NavMenu, NavRoute } from '../nav-route';
import { MobileNavDropdown } from './mobile-nav-dropdown';
import { MobileNavDropdownButton } from './mobile-nav-dropdown-button';

export type MobileNavbarProps = {
  homeRoute: NavRoute;

  projects: NavMenu;

  routes: ReadonlyArray<NavRoute>;
};

export function MobileNavbar(props: MobileNavbarProps) {
  const { homeRoute, projects, routes } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  function forceClose() {
    setMobileOpen(false);
  }

  useOutsideAlerter(dropdownRef, forceClose);

  return (
    <>
      <div className="flex items-center justify-between gap-4 py-2">
        <HomeLink route={homeRoute} />

        <div className="flex items-center gap-x-1">
          <ContactButton />
          <DarkModeSwitch />
          <MobileNavDropdownButton handleToggle={() => setMobileOpen(true)} />
        </div>
      </div>
      {mobileOpen && (
        <div
          className="mobile-menu border-t border-line pb-2 md:hidden"
          ref={dropdownRef}
        >
          <MobileNavDropdown projects={projects} routes={routes} />
        </div>
      )}
    </>
  );
}
