/**
 * Whether a nav route points at the page being viewed, or a page under it
 * (/blog/a-post is under /blog). The browser may report the page as /resume,
 * /resume/ or the built file /resume.html.
 */
export function isCurrentRoute(
  routePath: string,
  currentPath: string | undefined
): boolean {
  if (currentPath === undefined) {
    return false;
  }

  const path = normalize(currentPath);

  return path === routePath || path.startsWith(`${routePath}/`);
}

function normalize(path: string): string {
  const withoutFile = path
    .replace(/(^|\/)index\.html$/, '$1')
    .replace(/\.html$/, '');

  return withoutFile.length > 1 ? withoutFile.replace(/\/$/, '') : withoutFile;
}
