import { FaBars } from 'react-icons/fa6';
import { ButtonContainer } from '../button-container';

export interface MobileNavDropdownButtonProps {
  handleToggle: VoidFunction;
}

export function MobileNavDropdownButton(props: MobileNavDropdownButtonProps) {
  const { handleToggle } = props;

  return (
    <div className="md:hidden flex items-center">
      <button
        className="outline-none mobile-menu-button"
        onClick={handleToggle}
      >
        <ButtonContainer>
          <FaBars size={24} role={'img'} />
        </ButtonContainer>
      </button>
    </div>
  );
}
