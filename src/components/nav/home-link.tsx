import { useCurrentPath } from '../../hooks/use-current-path';
import { isCurrentRoute } from './is-current-route';
import { type NavRoute } from './nav-route';

export type HomeLinkProps = {
  route: NavRoute;
};

export function HomeLink(props: HomeLinkProps) {
  const isCurrent = isCurrentRoute(props.route.path, useCurrentPath());

  return (
    <a
      href={props.route.path}
      aria-current={isCurrent ? 'page' : undefined}
      className={`-ml-2 flex items-center gap-2.5 rounded-lg py-1 pr-3 pl-2 font-semibold text-strong transition-colors ${
        isCurrent
          ? 'bg-accent/12 ring-1 ring-accent/30 ring-inset'
          : 'hover:bg-strong/5'
      }`}
    >
      <img
        src="/images/avatar.jpg"
        alt=""
        width={48}
        height={48}
        className="size-7 rounded-[7px] ring-1 ring-line"
      />
      <span className="max-[22rem]:hidden">Ben McLean</span>
    </a>
  );
}
