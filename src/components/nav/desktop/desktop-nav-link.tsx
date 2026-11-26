import { useCurrentPath } from '../../../hooks/use-current-path';
import { isCurrentRoute } from '../is-current-route';
import { type NavRoute } from '../nav-route';

export interface DesktopNavLinkProps {
  route: NavRoute;
}

export function DesktopNavLink(props: DesktopNavLinkProps) {
  const { route } = props;

  const isCurrent = isCurrentRoute(route.path, useCurrentPath());

  return (
    <a
      href={route.path}
      aria-current={isCurrent ? 'page' : undefined}
      className={`small-caps text-[1.05rem] transition-colors ${
        isCurrent ? 'text-cloth' : 'text-ink-soft hover:text-ink'
      }`}
    >
      {route.name}
    </a>
  );
}
