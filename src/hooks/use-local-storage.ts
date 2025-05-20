import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

export function useLocalStorage(
  key: string,
  defaultValue?: string
): [string | null, Dispatch<SetStateAction<string | null>>] {
  const [value, setValue] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    if (value === undefined) {
      setValue(getLocalStorage(key, defaultValue));
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

  return [value ?? null, handleSetValue];
}

function getLocalStorage(key: string, defaultValue?: string): string | null {
  const item = window.localStorage.getItem(key);

  if (item) {
    return item;
  } else if (defaultValue !== undefined) {
    return defaultValue;
  } else {
    return null;
  }
}
