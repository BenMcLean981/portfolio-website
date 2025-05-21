import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

/**
 * Manages a value in local storage and synchronizes it with memory.
 *
 * @param key The key to use in localStorage/
 * @param defaultValue The default value to write, null for nothing, undefined for loading.
 */
export function useLocalStorage(
  key: string,
  defaultValue: string | null | undefined
): [string | null | undefined, Dispatch<SetStateAction<string | null>>] {
  const [value, setValue] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    if (value === undefined && defaultValue !== undefined) {
      const initial = getLocalStorage(key, defaultValue);

      setValue(initial);
    }
  }, [defaultValue, key, value]);

  function handleSetValue(action: SetStateAction<string | null>) {
    setValue((value) => {
      if (value === undefined) {
        throw new Error('Not initialized.');
      }

      const newValue = typeof action === 'function' ? action(value) : action;

      if (newValue === null) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, newValue);
      }

      return newValue;
    });
  }

  return [value, handleSetValue];
}

function getLocalStorage(
  key: string,
  defaultValue: string | null
): string | null {
  const item = window.localStorage.getItem(key);

  if (item) {
    return item;
  } else if (defaultValue !== null) {
    setLocalStorage(key, defaultValue);

    return defaultValue;
  } else {
    return null;
  }
}

function setLocalStorage(key: string, value: string | null): void {
  if (value === null) {
    window.localStorage.removeItem(key);
  } else {
    window.localStorage.setItem(key, value);
  }
}
