/**
 * Frontmatter dates are parsed as midnight UTC. Formatting them in UTC shows
 * the date as written, instead of the day before west of Greenwich.
 */
export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  });
}
