import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AgeInYears } from '../age-in-years';

const DATE_OF_BIRTH = new Date(1999, 2, 19);

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date'] });
});

afterEach(() => {
  vi.useRealTimers();
});

describe('AgeInYears', () => {
  it('shows the age as of the browser clock, not as of when the page was rendered.', () => {
    const renderedAt = new Date(2025, 0, 1).getTime();
    vi.setSystemTime(new Date(2026, 5, 1));

    render(
      <span data-testid="age">
        <AgeInYears dateOfBirth={DATE_OF_BIRTH} renderedAt={renderedAt} />
      </span>
    );

    expect(screen.getByTestId('age')).toHaveTextContent('27');
  });
});
