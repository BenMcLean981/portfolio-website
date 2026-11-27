import { describe, expect, it } from 'vitest';
import { containsCurrentRoute } from '../contains-current-route';

describe('containsCurrentRoute', () => {
  it('is true when one of the routes is the page you are on.', () => {
    const routes = [
      { name: 'Minesweeper', path: '/minesweeper' },
      { name: 'Advent of Code', path: '/advent-of-code' },
    ];

    expect(containsCurrentRoute(routes, '/advent-of-code.html')).toBe(true);
  });
});
