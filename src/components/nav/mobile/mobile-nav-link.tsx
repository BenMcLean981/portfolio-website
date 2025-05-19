import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type NavRoute } from '../nav-route';

export interface MobileNavProps {
  route: NavRoute;
}

export function MobileNavLink(props: MobileNavProps) {
  const { route } = props;

  const pathname = usePathname();

  return (
    <li className={pathname === route.path ? 'active' : undefined}>
      <Link
        href={route.path}
        className="block text-sm px-6 py-4 text-white hover:bg-blue-500 transition duration-300 font-semibold"
      >
        {route.name}
      </Link>
    </li>
  );
}
