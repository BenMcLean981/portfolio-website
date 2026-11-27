import { describe, expect, it } from 'vitest';
import { getCanonicalUrl } from '../canonical-url';

const SITE = new URL('https://example.com');

describe('getCanonicalUrl', () => {
  it('drops the .html extension that file-format builds add.', () => {
    expect(getCanonicalUrl('/resume.html', SITE)).toBe(
      'https://example.com/resume'
    );
  });

  it('maps the home page to the site root.', () => {
    expect(getCanonicalUrl('/index.html', SITE)).toBe('https://example.com/');
  });
});
