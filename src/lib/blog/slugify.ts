/**
 * Turns text into a URL slug: lowercase ASCII words joined by hyphens.
 * "Don't repeat yourself & café" becomes "dont-repeat-yourself-and-cafe".
 */
export function slugify(text: string): string {
  return text
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replaceAll('&', ' and ')
    .replace(/['’]/g, '')
    .split(/[^a-z0-9]+/)
    .filter((word) => word !== '')
    .join('-');
}
