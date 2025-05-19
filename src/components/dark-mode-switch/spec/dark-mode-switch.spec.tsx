import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { DarkModeSwitch } from '../dark-mode-switch';

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe('darkModeSwitch.', () => {
  it('renders both buttons.', () => {
    render(<DarkModeSwitch />);

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(2);
  });

  it('Renders correct icon.', () => {
    render(<DarkModeSwitch />);

    expect(screen.getByText('☀️')).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');

    act(() => {
      buttons[0].click();
    });

    expect(screen.getByText('🌙')).toBeInTheDocument();

    act(() => {
      buttons[1].click();
    });

    expect(screen.getByText('☀️')).toBeInTheDocument();
  });
});
