import { useEffect, useReducer } from 'react';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { useMediaQuery } from '../../hooks/use-media-query';
import { darkModeReducer } from './dark-mode-reducer';

export type DarkMode = {
  enabled: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
};

export function useDarkMode(): DarkMode {
  const systemDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [storedDarkMode, setStoredDarkMode] = useLocalStorage(
    'storedDarkMode',
    systemDark ? 'true' : 'false'
  );

  const [darkMode, dispatchDarkMode] = useReducer(
    darkModeReducer,
    storedDarkMode === 'true'
  );

  useEffect(() => {
    setStoredDarkMode(darkMode ? 'true' : 'false');

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode, setStoredDarkMode]);

  return {
    enabled: darkMode ?? false,
    toggle: () => dispatchDarkMode({ type: 'TOGGLE' }),
    enable: () => dispatchDarkMode({ type: 'ENABLE' }),
    disable: () => dispatchDarkMode({ type: 'DISABLE' }),
  };
}
