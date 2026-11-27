import { useEffect, useState } from 'react';
import { type MinesweeperStorageService } from '../../lib/minesweeper/storage/minesweeper-storage-service';
import { type StoredMinesweeperConfig } from '../../lib/minesweeper/storage/stored-minesweeper-config';
import { type LeaderboardTable } from './leaderboard';

export type MinesweeperData =
  | { status: 'loading' }
  | { status: 'error' }
  | {
      status: 'loaded';
      configs: ReadonlyArray<StoredMinesweeperConfig>;
      tables: ReadonlyArray<LeaderboardTable>;
    };

export function useMinesweeperData(
  storage: MinesweeperStorageService,
  limit: number
): MinesweeperData {
  const [data, setData] = useState<MinesweeperData>({ status: 'loading' });

  useEffect(() => {
    let isCurrent = true;

    loadMinesweeperData(storage, limit)
      .catch((): MinesweeperData => ({ status: 'error' }))
      .then((loaded) => {
        if (isCurrent) {
          setData(loaded);
        }
      });

    return () => {
      isCurrent = false;
    };
  }, [storage, limit]);

  return data;
}

async function loadMinesweeperData(
  storage: MinesweeperStorageService,
  limit: number
): Promise<MinesweeperData> {
  const configs = await storage.getConfigs();

  const tables = await Promise.all(
    configs.map(async (config): Promise<LeaderboardTable> => ({
      config,
      entries: await storage.getLeaderboardEntries(config, limit),
    }))
  );

  return { status: 'loaded', configs, tables };
}
