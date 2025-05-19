import { FaBars } from 'react-icons/fa6';
import { NavContainer } from '../nav-container';

export interface MobileDropdownButtonProps {
  handleToggle: VoidFunction;
  open: boolean;
}

export function MobileDropdownButton(props: MobileDropdownButtonProps) {
  const { open, handleToggle } = props;

  function getButtonColor(): string {
    const base = 'w-6 h-6 transition duration-300';

    if (open) {
      return `${base} text-white`;
    } else {
      return `${base} text-gray-500`;
    }
  }

  return (
    <div className="md:hidden flex items-center">
      <button
        className="outline-none mobile-menu-button"
        onClick={handleToggle}
      >
        <NavContainer>
          <FaBars size={24} />
        </NavContainer>
      </button>
    </div>
  );
}
