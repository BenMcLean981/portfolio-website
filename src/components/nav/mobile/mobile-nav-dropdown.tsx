import { type NavRoute } from '../nav-route';
import { MobileNavLink } from './mobile-nav-link';

interface Props {
  homeRoute: NavRoute;

  routes: ReadonlyArray<NavRoute>;
}

export function MobileNavDropdown(props: Props) {
  const { homeRoute, routes } = props;

  return (
    <ul className="bg-gray-700">
      {routes.map((route) => (
        <MobileNavLink route={route} key={route.name} />
      ))}
    </ul>
  );
}
