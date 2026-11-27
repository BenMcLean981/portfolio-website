import { isCurrentRoute } from './is-current-route';
import { type NavRoute } from './nav-route';

export function containsCurrentRoute(
  routes: ReadonlyArray<NavRoute>,
  currentPath: string | undefined
): boolean {
  return routes.some((route) => isCurrentRoute(route.path, currentPath));
}
