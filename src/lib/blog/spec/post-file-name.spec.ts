import { describe, expect, it } from 'vitest';
import { getPostFileName, getPostSlug } from '../post-file-name';

describe('getPostFileName', () => {
  it('starts with the date so posts sort by date on disk.', () => {
    const fileName = getPostFileName(
      'The role of programmers in the age of AI',
      new Date(2026, 10, 27)
    );

    expect(fileName).toBe(
      '2026-11-27-the-role-of-programmers-in-the-age-of-ai.md'
    );
  });
});

describe('getPostSlug', () => {
  it('leaves the date out of the URL.', () => {
    expect(
      getPostSlug('2026-11-27-the-role-of-programmers-in-the-age-of-ai.md')
    ).toBe('the-role-of-programmers-in-the-age-of-ai');
  });
});
