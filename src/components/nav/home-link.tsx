import { type NavRoute } from './nav-route';

export type HomeLinkProps = {
  route: NavRoute;
};

export function HomeLink(props: HomeLinkProps) {
  return (
    <a
      href={props.route.path}
      className="flex items-center gap-2.5 font-semibold text-strong"
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
