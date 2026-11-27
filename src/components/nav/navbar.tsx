import { DesktopNavbar } from './desktop/desktop-navbar';
import { MobileNavbar } from './mobile/mobile-navbar';
import { type NavMenu, type NavRoute } from './nav-route';

export function NavBar() {
  const homeRoute: NavRoute = { name: 'Home', path: '/' };

  const projects: NavMenu = {
    name: 'Projects',
    routes: [
      { name: 'Minesweeper', path: '/minesweeper' },
      { name: 'Advent of Code', path: '/advent-of-code' },
      { name: 'Stack', path: 'https://benmclean981.github.io/stack-dev/' },
    ],
  };

  const routes: NavRoute[] = [
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <nav>
      <div className={'hidden md:block'}>
        <DesktopNavbar
          homeRoute={homeRoute}
          projects={projects}
          routes={routes}
        />
      </div>
      <div className={'block md:hidden'}>
        <MobileNavbar
          homeRoute={homeRoute}
          projects={projects}
          routes={routes}
        />
      </div>
    </nav>
  );
}
