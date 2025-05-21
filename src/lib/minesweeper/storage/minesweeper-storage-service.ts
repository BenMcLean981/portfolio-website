import { type StoredMinesweeperConfig } from './stored-minesweeper-config';
import { type StoredMinesweeperLeaderboardEntry } from './stored-minesweeper-leaderboard-entry';

export interface MinesweeperStorageService {
  getConfigs(): Promise<ReadonlyArray<StoredMinesweeperConfig>>;

  getLeaderboardEntries(
    config: StoredMinesweeperConfig,
    limit: number
  ): Promise<ReadonlyArray<StoredMinesweeperLeaderboardEntry>>;

  saveLeaderboardEntry(
    name: string,
    milliseconds: number,
    config: StoredMinesweeperConfig
  ): Promise<void>;
}
