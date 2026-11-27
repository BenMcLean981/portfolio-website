import { type NavMenu, type NavRoute } from '../nav-route';
import { MobileNavLink } from './mobile-nav-link';

export interface MobileNavDropdownProps {
  projects: NavMenu;

  routes: ReadonlyArray<NavRoute>;
}

export function MobileNavDropdown(props: MobileNavDropdownProps) {
  const { projects, routes } = props;

  return (
    <div className="flex flex-col gap-3 pt-3">
      <div>
        <p className="px-3 pb-1 text-sm text-muted">{projects.name}</p>
        <ul className="flex flex-col gap-1">
          {projects.routes.map((route) => (
            <MobileNavLink route={route} key={route.path} />
          ))}
        </ul>
      </div>
      <ul className="flex flex-col gap-1 border-t border-line pt-3">
        {routes.map((route) => (
          <MobileNavLink route={route} key={route.path} />
        ))}
      </ul>
    </div>
  );
}
