import { type NavRoute } from '../nav-route';
import { MobileNavLink } from './mobile-nav-link';

interface Props {
  routes: ReadonlyArray<NavRoute>;
}

export function MobileNavDropdown(props: Props) {
  return (
    <ul className="bg-gray-700">
      {props.routes.map((route) => (
        <MobileNavLink route={route} key={route.name} />
      ))}
    </ul>
  );
}
