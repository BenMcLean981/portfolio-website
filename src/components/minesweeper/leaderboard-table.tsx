import { type StoredMinesweeperLeaderboardEntry } from '../../lib/minesweeper/storage/stored-minesweeper-leaderboard-entry';
import { notUndefined } from '../../lib/utils/utils';
import { H3 } from '../utils/headings';
import { ListItem } from '../utils/list-item';
import { OrderedList } from '../utils/ordered-list';
import { type LeaderboardTable } from './leaderboard';

export type LeaderboardTableProps = {
  table: LeaderboardTable;
  limit: number;
};

export function LeaderboardTable(props: LeaderboardTableProps) {
  const { table, limit } = props;

  const entries = padEntries(table.entries, limit);

  return (
    <div className={'flex flex-col w-full'}>
      <div className={'flex justify-center'}>
        <H3>{table.config.name}</H3>
      </div>
      <OrderedList>
        {entries.map((entry) => (
          <ListItem key={entry.id}>
            <div
              className={`flex justify-between ${entry.milliseconds !== 0 ? 'font-bold' : ''}`}
            >
              <span>{entry.name}</span>
              <span>{formatMilliseconds(entry.milliseconds)}</span>
            </div>
          </ListItem>
        ))}
      </OrderedList>
    </div>
  );
}

function padEntries(
  entries: ReadonlyArray<StoredMinesweeperLeaderboardEntry>,
  limit: number
): ReadonlyArray<StoredMinesweeperLeaderboardEntry> {
  if (entries.length >= limit) {
    return entries.slice(0, limit);
  }

  const ids = entries.map((e) => e.id).filter(notUndefined);
  const MAX_ID = Math.max(...ids);
  const BASE_ID = MAX_ID + 1;

  const result = [...entries];
  const numMissing = limit - entries.length;

  for (let i = 0; i < numMissing; i++) {
    result.push({ id: BASE_ID + i, name: '', milliseconds: 0 });
  }

  return result;
}

function formatMilliseconds(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const seconds = totalSeconds % 60;
  const fraction = Math.floor((ms % 1000) / 100); // 1 decimal place

  if (hours > 0) {
    return `${hours}:${(minutes % 60).toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${fraction}`;
  } else if (minutes > 0) {
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${fraction}`;
  } else {
    return `${seconds}.${fraction}`;
  }
}
