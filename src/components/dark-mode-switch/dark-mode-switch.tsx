import { FaRegMoon, FaRegSun } from 'react-icons/fa6';
import { ButtonContainer } from '../nav/button-container';
import { useDarkMode } from './use-dark-mode';

export function DarkModeSwitch() {
  const { enabled: darkMode, toggle } = useDarkMode();

  const Icon = darkMode ? FaRegSun : FaRegMoon;

  return (
    <button
      onClick={toggle}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <ButtonContainer>
        <Icon size={17} aria-hidden="true" />
      </ButtonContainer>
    </button>
  );
}
