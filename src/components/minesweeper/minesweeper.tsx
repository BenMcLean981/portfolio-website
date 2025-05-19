'use client';

import { useState } from 'react';
import { type MinesweeperConfig } from '../../lib/minesweeper/minesweeper-config';
import {
  MinesweeperConfigSelector,
  type NamedMinesweeperConfig,
} from './minesweeper-config-selector';

export function Minesweeper() {
  const [config, setConfig] = useState<MinesweeperConfig | undefined>(
    undefined
  );

  if (config === undefined) {
    return (
      <MinesweeperConfigSelector
        configOptions={CONFIG_OPTIONS}
        setConfig={setConfig}
      />
    );
  }

  return <div></div>;
}

const CONFIG_OPTIONS: ReadonlyArray<NamedMinesweeperConfig> = [
  {
    name: 'Beginner',
    numRows: 8,
    numColumns: 8,
    numBombs: 10,
  },
  {
    name: 'Intermediate',
    numRows: 16,
    numColumns: 16,
    numBombs: 40,
  },
  {
    name: 'Expert',
    numRows: 16,
    numColumns: 30,
    numBombs: 99,
  },
];
