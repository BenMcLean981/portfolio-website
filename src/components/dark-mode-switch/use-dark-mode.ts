import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { useMediaQuery } from '../../hooks/use-media-query';

export type DarkMode = {
  enabled: boolean;

  toggle(): void;
  enable(): void;
  disable(): void;
};

export function useDarkMode(): DarkMode {
  const systemDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [storedDarkMode, setStoredDarkMode] = useLocalStorage(
    'storedDarkMode',
    convertMediaQueryResult(systemDarkMode)
  );

  const [darkMode, setDarkMode] = useState<boolean | undefined>(() => {
    if (storedDarkMode === undefined) {
      return undefined;
    } else {
      return storedDarkMode === 'true';
    }
  });

  useEffect(() => {
    if (darkMode === undefined && storedDarkMode !== undefined) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, [darkMode, storedDarkMode]);

  useEffect(() => {
    if (darkMode !== undefined) {
      setStoredDarkMode(darkMode ? 'true' : 'false');

      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode, setStoredDarkMode]);

  return {
    enabled: darkMode ?? true,
    toggle() {
      return setDarkMode((darkMode) => !darkMode);
    },
    enable() {
      return setDarkMode(true);
    },
    disable() {
      return setDarkMode(false);
    },
  };
}

function convertMediaQueryResult(
  result: boolean | undefined
): string | undefined {
  if (result === undefined) {
    return undefined;
  } else {
    return result ? 'true' : 'false';
  }
}
