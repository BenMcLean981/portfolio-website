import { DarkModeSwitch } from '../../dark-mode-switch/dark-mode-switch';
import { ButtonContainer } from '../button-container';
import { ContactCard } from '../contact-modal';
import { HomeLink } from '../home-link';
import type { NavRoute } from '../nav-route';
import { DesktopNavLink } from './desktop-nav-link';

export type DesktopNavbarProps = {
  homeRoute: NavRoute;

  routes: ReadonlyArray<NavRoute>;
};

export function DesktopNavbar(props: DesktopNavbarProps) {
  const { routes, homeRoute } = props;

  return (
    <div className="flex items-center justify-between gap-8 py-2">
      <HomeLink route={homeRoute} />

      <div className="flex items-center gap-1">
        {routes.map((route) => (
          <DesktopNavLink key={route.path} route={route} />
        ))}
        <ContactCard>
          <ButtonContainer>Contact</ButtonContainer>
        </ContactCard>
        <DarkModeSwitch />
      </div>
    </div>
  );
}
