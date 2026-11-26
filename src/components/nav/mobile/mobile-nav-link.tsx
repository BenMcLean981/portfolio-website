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
        className={`block border-l-[3px] px-4 py-3 font-[family-name:var(--font-condensed)] text-xl font-semibold transition-colors ${
          isCurrent
            ? 'border-straw text-edge'
            : 'border-transparent text-edge-soft hover:text-edge'
        }`}
      >
        {route.name}
      </a>
    </li>
  );
}
