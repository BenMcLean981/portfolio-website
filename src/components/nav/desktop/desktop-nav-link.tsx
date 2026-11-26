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
      className={`lettering text-[1.05rem] font-medium underline-offset-[10px] transition-colors ${
        isCurrent
          ? 'text-ink underline decoration-redline decoration-2'
          : 'text-ink-soft hover:text-redline'
      }`}
    >
      {route.name}
    </a>
  );
}
