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
        className={`lettering block border-l-2 px-5 py-3 text-lg font-medium transition-colors ${
          isCurrent
            ? 'border-redline text-ink'
            : 'border-transparent text-ink-soft hover:text-redline'
        }`}
      >
        {route.name}
      </a>
    </li>
  );
}
