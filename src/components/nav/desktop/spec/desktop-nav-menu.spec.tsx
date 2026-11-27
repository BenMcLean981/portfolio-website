import { act, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DesktopNavMenu } from '../desktop-nav-menu';

describe('DesktopNavMenu', () => {
  it('shows its links once opened.', () => {
    render(<DesktopNavMenu name="Projects" routes={ROUTES} />);

    act(() => {
      screen.getByRole('button', { name: 'Projects' }).click();
    });

    expect(screen.getByRole('link', { name: 'Minesweeper' })).toBeVisible();
  });
});

const ROUTES = [
  { name: 'Minesweeper', path: '/minesweeper' },
  { name: 'Advent of Code', path: '/advent-of-code' },
];
