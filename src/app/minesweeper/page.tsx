import {
  type LeaderboardTable,
  MinesweeperLeaderboard,
} from '../../components/minesweeper/leaderboard';
import { Minesweeper } from '../../components/minesweeper/minesweeper';
import { Anchor } from '../../components/utils/anchor';
import { H1 } from '../../components/utils/headings';
import { HorizontalRow } from '../../components/utils/horizontal-row';
import { Paragraph } from '../../components/utils/paragraph';
import { makeMinesweeperStorageService } from '../../lib/minesweeper/storage/factory';
import { type StoredMinesweeperConfig } from '../../lib/minesweeper/storage/stored-minesweeper-config';

const STORAGE_SERVICE = makeMinesweeperStorageService();
const LIMIT = 5;

async function getTable(
  config: StoredMinesweeperConfig
): Promise<LeaderboardTable> {
  const entries = await STORAGE_SERVICE.getLeaderboardEntries(config, LIMIT);

  return { config, entries };
}

export default async function Page() {
  const configs = await STORAGE_SERVICE.getConfigs();

  const tables = await Promise.all(configs.map(getTable));

  return (
    <>
      <H1>Minesweeper</H1>
      <Paragraph>
        I decided to make a game of minesweeper in typescript. I chose
        minesweeper because the rules are well known, and it should be a good
        way to demonstrate my frontend capabilities. Check out the code{' '}
        <Anchor
          href="https://github.dev/BenMcLean981/portfolio-website/blob/main/src/minesweeper/page.tsx"
          newWindow
        >
          here!
        </Anchor>
      </Paragraph>
      <HorizontalRow />
      <div className={'min-h-96'}>
        <Minesweeper configs={configs} />
      </div>
      <HorizontalRow />
      <MinesweeperLeaderboard tables={tables} limit={LIMIT} />
    </>
  );
}
