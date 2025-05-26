'use client';

import { DesktopNavbar } from './desktop/desktop-navbar';
import { MobileNavbar } from './mobile/mobile-navbar';
import { type NavRoute } from './nav-route';

export function NavBar() {
  const homeRoute: NavRoute = { name: 'Home', path: '/' };

  const routes: NavRoute[] = [
    { name: 'Minesweeper', path: '/minesweeper' },
    { name: 'Advent of Code', path: '/advent-of-code' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <div>
      <nav className="bg-gray-800 shadow-lg">
        <div className={'hidden md:block'}>
          <DesktopNavbar homeRoute={homeRoute} routes={routes} />
        </div>
        <div className={'block md:hidden'}>
          <MobileNavbar routes={routes} homeRoute={homeRoute} />
        </div>
      </nav>
    </div>
  );
}
