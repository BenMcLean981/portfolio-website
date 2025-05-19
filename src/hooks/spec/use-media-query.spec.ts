import { fireEvent, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useMediaQuery } from '../use-media-query';

let resized = false;

function fakeResize() {
  resized = true;
  fireEvent.resize(window);
}

beforeEach(() => {
  resized = false;

  function mediaHelper(query: string) {
    if (resized && query === 'afterResize') {
      return true;
    } else {
      return query === 'bar';
    }
  }

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: mediaHelper(query),
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

describe('useMediaQuery', () => {
  it('returns false for no matches.', () => {
    const { result } = renderHook(() => useMediaQuery('foo'));

    expect(result.current).toBe(false);
  });

  it('returns true for match.', () => {
    const { result } = renderHook(() => useMediaQuery('bar'));

    expect(result.current).toBe(true);
  });

  it('updates after resize', () => {
    const { result } = renderHook(() => useMediaQuery('afterResize'));

    expect(result.current).toBe(false);

    fakeResize();

    expect(result.current).toBe(true);
  });
});
