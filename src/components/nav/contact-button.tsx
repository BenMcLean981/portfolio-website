import { FaRegEnvelope } from 'react-icons/fa6';
import { ButtonContainer } from './button-container';
import { ContactCard } from './contact-modal';

export function ContactButton() {
  return (
    <ContactCard label="Contact">
      <ButtonContainer>
        <FaRegEnvelope size={17} aria-hidden="true" />
      </ButtonContainer>
    </ContactCard>
  );
}
