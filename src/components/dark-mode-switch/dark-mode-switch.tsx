import { useDarkMode } from './use-dark-mode';

export function DarkModeSwitch() {
  const { enabled: darkMode, toggle } = useDarkMode();

  const darkModeLabel = darkMode ? '🌙' : '☀️';

  return (
    <div className="flex items-center gap-x-2">
      <button
        className="flex h-5 w-10 cursor-pointer items-center rounded-full bg-kerf p-0.5"
        onClick={toggle}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div
          onClick={(e) => e.preventDefault()}
          className={
            'h-4 w-4 rounded-full bg-straw transition-transform duration-300 ease-in-out' +
            (darkMode ? ' translate-x-5' : '')
          }
        />
      </button>
      <button onClick={toggle} className="text-sm">
        <span>{darkModeLabel}</span>
      </button>
    </div>
  );
}
