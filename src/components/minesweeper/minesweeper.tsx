'use client';

import { type SetStateAction, useState } from 'react';
import { MinesweeperBuilder } from '../../lib/minesweeper/minesweeper-builder';
import { type MinesweeperConfig } from '../../lib/minesweeper/minesweeper-config';
import { MinesweeperGame } from '../../lib/minesweeper/minesweper-game';
import {
  MinesweeperConfigSelector,
  type NamedMinesweeperConfig,
} from './minesweeper-config-selector';
import { MinesweeperGameView } from './minesweeper-game-view';

export function Minesweeper() {
  const [game, setGame] = useState<MinesweeperGame | undefined>(undefined);

  function handleSetConfig(config: MinesweeperConfig) {
    const board = MinesweeperBuilder.build(config);
    const game = MinesweeperGame.startNewGame(board);

    setGame(game);
  }

  if (game === undefined) {
    return (
      <MinesweeperConfigSelector
        configOptions={CONFIG_OPTIONS}
        setConfig={handleSetConfig}
      />
    );
  }

  function setGameSafe(action: SetStateAction<MinesweeperGame>) {
    setGame((game) => {
      if (game === undefined) {
        throw new Error('Game not initialized.');
      } else if (typeof action === 'function') {
        return action(game);
      } else {
        return action;
      }
    });
  }

  function resetGame() {
    if (!game?.isGameOver) {
      throw new Error('Game not over.');
    }

    setGame(undefined);
  }

  return (
    <div className={'mb-48'}>
      <MinesweeperGameView
        game={game}
        setGame={setGameSafe}
        resetGame={resetGame}
      />
    </div>
  );
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
