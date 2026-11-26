/**
 * The address a built page should be indexed under. File-format builds
 * report paths like `/resume.html` and `/index.html`, but Cloudflare serves
 * them at `/resume` and `/`.
 */
export function getCanonicalUrl(builtPath: string, site: URL): string {
  const path = builtPath
    .replace(/(^|\/)index\.html$/, '$1')
    .replace(/\.html$/, '');

  return new URL(path, site).href;
}
