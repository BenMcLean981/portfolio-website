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
      className={`font-[family-name:var(--font-condensed)] text-xl font-semibold underline-offset-[10px] transition-colors ${
        isCurrent
          ? 'text-edge underline decoration-straw decoration-[3px]'
          : 'text-edge-soft hover:text-edge'
      }`}
    >
      {route.name}
    </a>
  );
}
