import { DarkModeSwitch } from '../../dark-mode-switch/dark-mode-switch';
import { ContactButton } from '../contact-button';
import { HomeLink } from '../home-link';
import type { NavMenu, NavRoute } from '../nav-route';
import { DesktopNavLink } from './desktop-nav-link';
import { DesktopNavMenu } from './desktop-nav-menu';

export type DesktopNavbarProps = {
  homeRoute: NavRoute;

  projects: NavMenu;

  routes: ReadonlyArray<NavRoute>;
};

export function DesktopNavbar(props: DesktopNavbarProps) {
  const { homeRoute, projects, routes } = props;

  return (
    <div className="flex items-center justify-between gap-8 py-2">
      <HomeLink route={homeRoute} />

      <div className="flex items-center gap-1">
        <DesktopNavMenu name={projects.name} routes={projects.routes} />
        {routes.map((route) => (
          <DesktopNavLink key={route.path} route={route} />
        ))}
        <ContactButton />
        <div className="ml-2">
          <DarkModeSwitch />
        </div>
      </div>
    </div>
  );
}
