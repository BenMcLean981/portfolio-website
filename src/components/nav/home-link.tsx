import { type NavRoute } from './nav-route';

export type HomeLinkProps = {
  route: NavRoute;
};

export function HomeLink(props: HomeLinkProps) {
  return (
    <a
      href={props.route.path}
      className="small-caps text-lg text-ink transition-colors hover:text-cloth"
    >
      Ben McLean
    </a>
  );
}
