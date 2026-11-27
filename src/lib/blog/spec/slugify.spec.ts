import { describe, expect, it } from 'vitest';
import { slugify } from '../slugify';

describe('slugify', () => {
  it('joins lowercase words with hyphens.', () => {
    expect(slugify('The role of programmers in the age of AI')).toBe(
      'the-role-of-programmers-in-the-age-of-ai'
    );
  });

  it('drops punctuation without leaving stray hyphens.', () => {
    expect(slugify('  Testing: a primer, part 2!  ')).toBe(
      'testing-a-primer-part-2'
    );
  });

  it('keeps words with apostrophes whole.', () => {
    expect(slugify("Don’t repeat yourself, it's fine")).toBe(
      'dont-repeat-yourself-its-fine'
    );
  });

  it('keeps the base letter of accented letters.', () => {
    expect(slugify('Über café')).toBe('uber-cafe');
  });

  it('spells out ampersands.', () => {
    expect(slugify('Red, green & refactor')).toBe('red-green-and-refactor');
  });
});
