import { useCurrentPath } from '../../../hooks/use-current-path';
import { type NavRoute } from '../nav-route';

export interface MobileNavProps {
  route: NavRoute;
}

export function MobileNavLink(props: MobileNavProps) {
  const { route } = props;

  const pathname = useCurrentPath();

  return (
    <li className={pathname === route.path ? 'active' : undefined}>
      <a
        href={route.path}
        className="block text-sm px-6 py-4 text-white hover:bg-blue-500 transition duration-300 font-semibold"
      >
        {route.name}
      </a>
    </li>
  );
}
