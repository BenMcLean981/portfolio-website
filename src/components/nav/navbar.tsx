import { DesktopNavbar } from './desktop/desktop-navbar';
import { MobileNavbar } from './mobile/mobile-navbar';
import { type NavRoute } from './nav-route';

export function NavBar() {
  const homeRoute: NavRoute = { name: 'Home', path: '/' };

  const routes: NavRoute[] = [
    homeRoute,
    { name: 'Minesweeper', path: '/minesweeper' },
    { name: 'Advent of Code', path: '/advent-of-code' },
    { name: 'Stack', path: 'https://benmclean981.github.io/stack-dev/' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <nav>
      <div className={'hidden md:block'}>
        <DesktopNavbar homeRoute={homeRoute} routes={routes} />
      </div>
      <div className={'block md:hidden'}>
        <MobileNavbar routes={routes} homeRoute={homeRoute} />
      </div>
    </nav>
  );
}
