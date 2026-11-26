import { PartMark } from '../cut/part-mark';
import { type NavRoute } from './nav-route';

export type HomeLinkProps = {
  route: NavRoute;
};

export function HomeLink(props: HomeLinkProps) {
  return (
    <a
      href={props.route.path}
      className="flex items-center gap-3 text-edge transition-colors hover:text-straw"
    >
      <PartMark size={28} />
      <span className="hidden font-[family-name:var(--font-condensed)] text-2xl font-bold sm:inline">
        Ben McLean
      </span>
    </a>
  );
}
