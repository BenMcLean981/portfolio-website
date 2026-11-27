import { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { useCurrentPath } from '../../../hooks/use-current-path';
import { useOutsideAlerter } from '../../../hooks/use-outside-alerter';
import { containsCurrentRoute } from '../contains-current-route';
import { isCurrentRoute } from '../is-current-route';
import { type NavRoute } from '../nav-route';

export type DesktopNavMenuProps = {
  name: string;
  routes: ReadonlyArray<NavRoute>;
};

export function DesktopNavMenu(props: DesktopNavMenuProps) {
  const { name, routes } = props;

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentPath = useCurrentPath();

  useOutsideAlerter(ref, () => setOpen(false));

  const isCurrent = containsCurrentRoute(routes, currentPath);

  return (
    <div ref={ref} className="relative">
      <button
        aria-expanded={open}
        onClick={() => setOpen((open) => !open)}
        className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-[0.9375rem] transition-colors ${
          isCurrent
            ? 'bg-accent/12 text-strong ring-1 ring-accent/30 ring-inset'
            : 'text-muted hover:bg-strong/5 hover:text-strong'
        }`}
      >
        {name}
        <FaChevronDown
          size={10}
          aria-hidden="true"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <ul className="absolute top-full right-0 mt-2 flex min-w-48 flex-col gap-0.5 rounded-xl border border-line bg-raised p-1.5 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.6)]">
          {routes.map((route) => (
            <li key={route.path}>
              <MenuLink
                route={route}
                isCurrent={isCurrentRoute(route.path, currentPath)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

type MenuLinkProps = {
  route: NavRoute;
  isCurrent: boolean;
};

function MenuLink(props: MenuLinkProps) {
  const { route, isCurrent } = props;

  return (
    <a
      href={route.path}
      aria-current={isCurrent ? 'page' : undefined}
      className={`block rounded-lg px-3 py-2 text-[0.9375rem] transition-colors ${
        isCurrent
          ? 'bg-accent/12 text-strong'
          : 'text-body hover:bg-strong/5 hover:text-strong'
      }`}
    >
      {route.name}
    </a>
  );
}
