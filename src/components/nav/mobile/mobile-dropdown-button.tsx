import { FaBars } from 'react-icons/fa6';
import { ButtonContainer } from '../button-container';

export interface MobileDropdownButtonProps {
  handleToggle: VoidFunction;
}

export function MobileDropdownButton(props: MobileDropdownButtonProps) {
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
