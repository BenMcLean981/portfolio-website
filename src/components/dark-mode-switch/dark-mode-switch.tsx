import { useDarkMode } from './use-dark-mode';

export function DarkModeSwitch() {
  const { enabled: darkMode, toggle } = useDarkMode();

  const darkModeLabel = darkMode ? '🌙' : '☀️';

  return (
    <div className="flex items-center gap-x-2">
      <button
        className="flex h-5 w-9 cursor-pointer items-center rounded-full border border-rule bg-paper-sunk p-0.5"
        onClick={toggle}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div
          onClick={(e) => e.preventDefault()}
          className={
            'h-3.5 w-3.5 rounded-full bg-cloth transition-transform duration-300 ease-in-out' +
            (darkMode ? ' translate-x-4' : '')
          }
        />
      </button>
      <button onClick={toggle} className="text-sm">
        <span>{darkModeLabel}</span>
      </button>
    </div>
  );
}
