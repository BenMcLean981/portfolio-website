'use client';

import { MINESWEEPER_STORAGE_SERVICE } from '../../lib/minesweeper/storage/factory';
import { HorizontalRow } from '../typography/horizontal-row';
import { Paragraph } from '../typography/paragraph';
import { MinesweeperLeaderboard } from './leaderboard';
import { Minesweeper } from './minesweeper';
import { useMinesweeperData } from './use-minesweeper-data';

const LIMIT = 5;

export function MinesweeperSection() {
  const data = useMinesweeperData(MINESWEEPER_STORAGE_SERVICE, LIMIT);

  switch (data.status) {
    case 'loading':
      return <Status>Loading...</Status>;
    case 'error':
      return <Status>Minesweeper is unavailable right now.</Status>;
    case 'loaded':
      return (
        <>
          <div className={'min-h-72'}>
            <Minesweeper configs={data.configs} />
          </div>
          <HorizontalRow />
          <MinesweeperLeaderboard tables={data.tables} limit={LIMIT} />
        </>
      );
  }
}

function Status(props: { children: string }) {
  return (
    <div className={'min-h-72'}>
      <Paragraph>{props.children}</Paragraph>
    </div>
  );
}
