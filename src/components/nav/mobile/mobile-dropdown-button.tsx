import { FaBars } from 'react-icons/fa6';
import { NavContainer } from '../nav-container';

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
        <NavContainer>
          <FaBars size={24} role={'img'} />
        </NavContainer>
      </button>
    </div>
  );
}
