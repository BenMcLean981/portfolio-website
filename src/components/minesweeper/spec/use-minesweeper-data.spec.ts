import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { type MinesweeperStorageService } from '../../../lib/minesweeper/storage/minesweeper-storage-service';
import { type StoredMinesweeperConfig } from '../../../lib/minesweeper/storage/stored-minesweeper-config';
import { useMinesweeperData } from '../use-minesweeper-data';

const EASY: StoredMinesweeperConfig = {
  id: 1,
  name: 'Easy',
  numRows: 9,
  numColumns: 9,
  numBombs: 10,
};

const HARD: StoredMinesweeperConfig = {
  id: 2,
  name: 'Hard',
  numRows: 16,
  numColumns: 30,
  numBombs: 99,
};

function makeStorage(): MinesweeperStorageService {
  return {
    getConfigs: async () => [EASY, HARD],
    getLeaderboardEntries: async (config, limit) =>
      [
        {
          id: 10 * config.id!,
          name: `${config.name} champ`,
          milliseconds: 5000,
        },
        { id: 10 * config.id! + 1, name: 'runner up', milliseconds: 9000 },
      ].slice(0, limit),
    saveLeaderboardEntry: async () => {},
  };
}

describe('useMinesweeperData', () => {
  it('loads configs and a leaderboard table per config in the browser.', async () => {
    const storage = makeStorage();
    const { result } = renderHook(() => useMinesweeperData(storage, 1));

    expect(result.current).toEqual({ status: 'loading' });

    await waitFor(() =>
      expect(result.current).toEqual({
        status: 'loaded',
        configs: [EASY, HARD],
        tables: [
          {
            config: EASY,
            entries: [{ id: 10, name: 'Easy champ', milliseconds: 5000 }],
          },
          {
            config: HARD,
            entries: [{ id: 20, name: 'Hard champ', milliseconds: 5000 }],
          },
        ],
      })
    );
  });

  it('reports an error when the leaderboard cannot be loaded.', async () => {
    const storage: MinesweeperStorageService = {
      ...makeStorage(),
      getConfigs: async () => {
        throw new Error('Supabase is down.');
      },
    };

    const { result } = renderHook(() => useMinesweeperData(storage, 5));

    await waitFor(() => expect(result.current).toEqual({ status: 'error' }));
  });
});
