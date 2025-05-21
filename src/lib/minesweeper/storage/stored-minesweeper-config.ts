import { type MinesweeperConfig } from '../minesweeper-config';

export type StoredMinesweeperConfig = MinesweeperConfig & {
  id?: number;

  name: string;
};
