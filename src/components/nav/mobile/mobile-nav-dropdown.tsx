import { type NavRoute } from '../nav-route';
import { MobileNavLink } from './mobile-nav-link';

export interface MobileNavDropdownProps {
  routes: ReadonlyArray<NavRoute>;
}

export function MobileNavDropdown(props: MobileNavDropdownProps) {
  const { routes } = props;

  return (
    <ul className="bg-gray-700">
      {routes.map((route) => (
        <MobileNavLink route={route} key={route.name} />
      ))}
    </ul>
  );
}
