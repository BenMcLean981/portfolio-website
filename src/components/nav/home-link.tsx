import { ProjectionMark } from '../sheet/projection-mark';
import { type NavRoute } from './nav-route';

export type HomeLinkProps = {
  route: NavRoute;
};

export function HomeLink(props: HomeLinkProps) {
  return (
    <a
      href={props.route.path}
      className="flex items-center gap-3 text-ink transition-colors hover:text-redline"
    >
      <ProjectionMark size={30} />
      <span className="lettering hidden text-xl font-semibold sm:inline">
        Ben McLean
      </span>
    </a>
  );
}
