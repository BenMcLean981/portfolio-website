import { describe, expect, it } from 'vitest';
import { canonicalUrl } from '../canonical-url';

const SITE = new URL('https://example.com');

describe('canonicalUrl', () => {
  it('drops the .html extension that file-format builds add.', () => {
    expect(canonicalUrl('/resume.html', SITE)).toBe(
      'https://example.com/resume'
    );
  });

  it('maps the home page to the site root.', () => {
    expect(canonicalUrl('/index.html', SITE)).toBe('https://example.com/');
  });
});
