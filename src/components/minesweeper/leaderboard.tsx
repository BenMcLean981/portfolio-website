import { type StoredMinesweeperConfig } from '@/lib/minesweeper/storage/stored-minesweeper-config';
import { type StoredMinesweeperLeaderboardEntry } from '../../lib/minesweeper/storage/stored-minesweeper-leaderboard-entry';
import { H2 } from '../typography/headings';
import { LeaderboardTable } from './leaderboard-table';

export type LeaderboardTable = {
  config: StoredMinesweeperConfig;
  entries: ReadonlyArray<StoredMinesweeperLeaderboardEntry>;
};

export type MinesweeperLeaderboardProps = {
  tables: ReadonlyArray<LeaderboardTable>;

  limit: number;
};

export function MinesweeperLeaderboard(props: MinesweeperLeaderboardProps) {
  const { tables, limit } = props;

  return (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex justify-center w-full'}>
        <H2>Leaderboard</H2>
      </div>
      <div className={'flex justify-between gap-4 flex-wrap'}>
        {tables.map((table) => (
          <div
            className={'flex-1 flex justify-center max-w-[250px]'}
            key={table.config.id}
          >
            <LeaderboardTable
              key={table.config.id}
              table={table}
              limit={limit}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
