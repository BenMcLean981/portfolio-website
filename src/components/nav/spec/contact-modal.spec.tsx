import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContactCard } from '../contact-modal';

describe('ContactCard', () => {
  it('closes when Escape is pressed.', () => {
    render(<ContactCard label="Contact">Open</ContactCard>);

    act(() => {
      screen.getByRole('button', { name: 'Contact' }).click();
    });

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
