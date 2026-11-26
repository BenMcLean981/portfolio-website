import { useCurrentPath } from '../../../hooks/use-current-path';
import { isCurrentRoute } from '../is-current-route';
import { type NavRoute } from '../nav-route';

export interface MobileNavProps {
  route: NavRoute;
}

export function MobileNavLink(props: MobileNavProps) {
  const { route } = props;

  const isCurrent = isCurrentRoute(route.path, useCurrentPath());

  return (
    <li>
      <a
        href={route.path}
        aria-current={isCurrent ? 'page' : undefined}
        className={`small-caps block py-3 text-lg transition-colors ${
          isCurrent ? 'text-cloth' : 'text-ink-soft hover:text-ink'
        }`}
      >
        {route.name}
      </a>
    </li>
  );
}
