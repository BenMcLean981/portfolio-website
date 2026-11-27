import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { type LeaderboardTable as Table } from '../leaderboard';
import { LeaderboardTable } from '../leaderboard-table';

describe('LeaderboardTable', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('pads an empty table to the limit without duplicate keys.', () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(<LeaderboardTable table={makeTable([])} limit={3} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(consoleError).not.toHaveBeenCalled();
  });
});

function makeTable(entries: Table['entries']): Table {
  return {
    config: {
      id: 1,
      name: 'Beginner',
      numRows: 9,
      numColumns: 9,
      numBombs: 10,
    },
    entries,
  };
}
