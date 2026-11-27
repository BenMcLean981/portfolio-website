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
        className={`block px-3 py-2.5 rounded-lg text-[0.9375rem] transition-colors ${
          isCurrent
            ? 'bg-accent/12 text-strong ring-1 ring-accent/30 ring-inset'
            : 'text-muted hover:bg-strong/5 hover:text-strong'
        }`}
      >
        {route.name}
      </a>
    </li>
  );
}
