import { describe, expect, it } from 'vitest';
import { isCurrentRoute } from '../is-current-route';

describe('isCurrentRoute', () => {
  it('matches the page you are on.', () => {
    expect(isCurrentRoute('/minesweeper', '/minesweeper')).toBe(true);
  });

  it('ignores a trailing slash.', () => {
    expect(isCurrentRoute('/minesweeper', '/minesweeper/')).toBe(true);
  });

  it('ignores the .html extension of the built file.', () => {
    expect(isCurrentRoute('/minesweeper', '/minesweeper.html')).toBe(true);
  });

  it('treats /index.html as the home page.', () => {
    expect(isCurrentRoute('/', '/index.html')).toBe(true);
  });

  it('counts a page under a route as part of it.', () => {
    expect(isCurrentRoute('/blog', '/blog/on-craftsmanship')).toBe(true);
  });
});
