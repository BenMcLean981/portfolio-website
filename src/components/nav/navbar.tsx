'use client';

import { useRef, useState } from 'react';

import { useOutsideAlerter } from '../../hooks/use-outside-alerter';
import { DarkModeSwitch } from '../dark-mode-switch/dark-mode-switch';
import { ButtonContainer } from './button-container';
import { ContactCard } from './contact-modal';
import { DesktopNav } from './desktop/desktop-nav';
import { MobileDropdownButton } from './mobile/mobile-dropdown-button';
import { MobileNavDropdown } from './mobile/mobile-nav-dropdown';
import { type NavRoute } from './nav-route';

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  function forceClose() {
    setMobileOpen(false);
  }

  useOutsideAlerter(navRef, forceClose);

  const homeRoute: NavRoute = { name: 'Home', path: '/' };

  const routes: NavRoute[] = [
    { name: 'Minesweeper', path: '/minesweeper' },
    { name: 'Advent of Code', path: '/advent-of-code' },
  ];

  return (
    <div>
      <nav className="bg-gray-800 shadow-lg" ref={navRef}>
        <div>
          <div className="flex justify-between items-center px-4">
            <div>
              <DesktopNav routes={routes} homeRoute={homeRoute} />
            </div>
            <div className="flex justify-end w-full md:w-auto items-center gap-x-6 my-6">
              <ContactCard>
                <ButtonContainer>Contact</ButtonContainer>
              </ContactCard>
              <DarkModeSwitch />
              <MobileDropdownButton
                handleToggle={() => setMobileOpen((open) => !open)}
                open={mobileOpen}
              />
            </div>
          </div>
          {mobileOpen && (
            <div
              className="mobile-menu md:hidden border-t border-t-neutral-400 border-b dark:border-b-neutral-400"
              ref={menuRef}
            >
              <MobileNavDropdown routes={routes} />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
