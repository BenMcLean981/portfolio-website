import { useDarkMode } from './use-dark-mode';

export function DarkModeSwitch() {
  const { enabled: darkMode, toggle } = useDarkMode();

  const darkModeLabel = darkMode ? '🌙' : '☀️';

  return (
    <div className="flex items-center gap-x-2">
      <button
        className="flex h-5 w-10 cursor-pointer items-center rounded-full border border-ink p-0.5"
        onClick={toggle}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div
          onClick={(e) => e.preventDefault()}
          className={
            'h-3.5 w-3.5 rounded-full bg-ink transition-transform duration-300 ease-in-out' +
            (darkMode ? ' translate-x-[1.2rem]' : '')
          }
        />
      </button>
      <button onClick={toggle} className="text-sm">
        <span>{darkModeLabel}</span>
      </button>
    </div>
  );
}
