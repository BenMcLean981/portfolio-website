import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useLocalStorage } from '../use-local-storage';

type Store = {
  [key: string]: string | null;
};

// TODO: TestStorage injection.

describe('useLocalStorage', () => {
  let mockStorage: Store = {};

  beforeEach(() => {
    mockStorage = {};

    global.Storage.prototype.setItem = vi.fn(
      (key: string, value: string | null) => {
        mockStorage[key] = value;
      }
    );

    global.Storage.prototype.getItem = vi.fn((key: string) => {
      if (key in mockStorage) {
        return mockStorage[key];
      } else {
        return null;
      }
    });

    global.Storage.prototype.removeItem = vi.fn((key: string) => {
      delete mockStorage[key];
    });
  });

  it('Returns undefined for default undefined (loading).', () => {
    const { result } = renderHook(() => useLocalStorage('foo', undefined));

    expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(0);

    expect(result.current[0]).toBeUndefined();
  });

  it('Loads when default eventually set.', () => {
    type TestProps = { key: string; defaultValue: string | null | undefined };

    const initialProps: TestProps = { key: 'foo', defaultValue: undefined };

    const { result, rerender } = renderHook(
      (props: TestProps) => useLocalStorage(props.key, props.defaultValue),
      { initialProps }
    );

    rerender({ key: 'foo', defaultValue: 'bar' });

    expect(global.Storage.prototype.getItem('foo')).toBe('bar');

    expect(result.current[0]).toEqual('bar');
  });

  it('Returns null for an item not in local storage.', () => {
    const { result } = renderHook(() => useLocalStorage('foo', null));

    expect(global.Storage.prototype.getItem('foo')).toBe(null);

    expect(result.current[0]).toBeNull();
  });

  it('Returns value for an item in local storage.', () => {
    global.Storage.prototype.setItem('foo', 'bar');

    const { result } = renderHook(() => useLocalStorage('foo', null));

    expect(global.Storage.prototype.getItem('foo')).toBe('bar');
    expect(result.current[0]).toEqual('bar');
  });

  it('Returns a default value when nothing is set in key and sets value in store.', async () => {
    const { result } = renderHook(() => useLocalStorage('foo', 'bar'));

    expect(result.current[0]).toEqual('bar');
    expect(mockStorage['foo']).toEqual('bar');
  });

  it('Returns non-default when default is passed but value is in store.', () => {
    global.Storage.prototype.setItem('foo', 'foo');

    const { result } = renderHook(() => useLocalStorage('foo', 'bar'));

    expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(1);

    expect(result.current[0]).toEqual('foo');
    expect(mockStorage['foo']).toEqual('foo');
  });
});
