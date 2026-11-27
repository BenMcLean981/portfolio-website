import { describe, expect, it } from 'vitest';
import { formatPostDate } from '../format-post-date';

describe('formatPostDate', () => {
  it('shows the date written in the frontmatter, whatever the time zone.', () => {
    expect(formatPostDate(new Date('2026-11-26'))).toBe('November 26, 2026');
  });
});
