import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useCurrentPath } from '../use-current-path';

describe('useCurrentPath', () => {
  it('returns the browser pathname after mounting.', () => {
    window.history.pushState({}, '', '/minesweeper');

    const { result } = renderHook(() => useCurrentPath());

    expect(result.current).toBe('/minesweeper');
  });
});
