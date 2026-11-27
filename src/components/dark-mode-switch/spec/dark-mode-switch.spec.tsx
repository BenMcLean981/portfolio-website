import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { DarkModeSwitch } from '../dark-mode-switch';

describe('DarkModeSwitch', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    mockSystemLightMode();
  });

  it('is a single button.', () => {
    render(<DarkModeSwitch />);

    expect(screen.getAllByRole('button')).toHaveLength(1);
  });

  it('switches between light and dark mode.', () => {
    render(<DarkModeSwitch />);

    act(() =>
      screen.getByRole('button', { name: 'Switch to dark mode' }).click()
    );

    expect(document.documentElement).toHaveClass('dark');

    act(() =>
      screen.getByRole('button', { name: 'Switch to light mode' }).click()
    );

    expect(document.documentElement).not.toHaveClass('dark');
  });
});

function mockSystemLightMode() {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}
