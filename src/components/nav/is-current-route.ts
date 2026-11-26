/**
 * Whether a nav route points at the page being viewed. The browser may report
 * the page as /resume, /resume/ or the built file /resume.html.
 */
export function isCurrentRoute(
  routePath: string,
  currentPath: string | undefined
): boolean {
  return currentPath !== undefined && routePath === normalize(currentPath);
}

function normalize(path: string): string {
  const withoutFile = path
    .replace(/(^|\/)index\.html$/, '$1')
    .replace(/\.html$/, '');

  return withoutFile.length > 1 ? withoutFile.replace(/\/$/, '') : withoutFile;
}
