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
      <div className={'grid grid-cols-1 lg:grid-cols-3 gap-8 content-center'}>
        {tables.map((table) => (
          <div className={'flex justify-center w-full'} key={table.config.id}>
            <div className={'w-[250px]'}>
              <LeaderboardTable
                key={table.config.id}
                table={table}
                limit={limit}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
