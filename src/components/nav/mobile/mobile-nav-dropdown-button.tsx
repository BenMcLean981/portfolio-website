import { FaBars } from 'react-icons/fa6';
import { ButtonContainer } from '../button-container';

export interface MobileNavDropdownButtonProps {
  handleToggle: VoidFunction;
}

export function MobileNavDropdownButton(props: MobileNavDropdownButtonProps) {
  const { handleToggle } = props;

  return (
    <div className="flex items-center md:hidden">
      <button
        className="mobile-menu-button"
        onClick={handleToggle}
        aria-label="Open menu"
      >
        <ButtonContainer>
          <FaBars size={20} role={'img'} />
        </ButtonContainer>
      </button>
    </div>
  );
}
