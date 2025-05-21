'use client';

import { type SetStateAction, useEffect, useState } from 'react';
import { useTimer } from '../../hooks/use-timer';
import { MinesweeperBuilder } from '../../lib/minesweeper/minesweeper-builder';
import { type MinesweeperConfig } from '../../lib/minesweeper/minesweeper-config';
import { MinesweeperGame } from '../../lib/minesweeper/minesweper-game';
import { type Position } from '../../lib/minesweeper/position';
import {
  MinesweeperConfigSelector,
  type NamedMinesweeperConfig,
} from './minesweeper-config-selector';
import { MinesweeperGameView } from './minesweeper-game-view';

type GameState = {
  config: MinesweeperConfig;

  game: MinesweeperGame;
};

export function Minesweeper() {
  const [state, setState] = useState<GameState | undefined>(undefined);

  const timer = useTimer();

  useEffect(() => {
    if (state === undefined) {
      return;
    }

    const isGameDone = state.game.isGameWon || state.game.isGameOver;

    if (timer.isEnabled && isGameDone) {
      timer.disable();
    } else if (!timer.isEnabled && !state.game.isNewGame && !isGameDone) {
      timer.enable();
    }
  }, [state, timer]);

  function handleSetConfig(config: MinesweeperConfig) {
    const board = MinesweeperBuilder.build(config);
    const game = MinesweeperGame.startNewGame(board);

    setState({ config, game });
  }

  if (state === undefined) {
    return (
      <MinesweeperConfigSelector
        configOptions={CONFIG_OPTIONS}
        setConfig={handleSetConfig}
      />
    );
  }

  function setGameSafe(action: SetStateAction<MinesweeperGame>) {
    setState((state) => {
      if (state === undefined) {
        throw new Error('Game not initialized.');
      } else if (typeof action === 'function') {
        return { ...state, game: action(state.game) };
      } else {
        return { ...state, game: action };
      }
    });
  }

  function resetGame() {
    if (!state?.game.isGameOver && !state?.game.isGameWon) {
      throw new Error('Game not over.');
    }

    setState(undefined);
  }

  function handleInitialReveal(initialRevealedPosition: Position) {
    // Handle case where user clicks bomb on first go.

    if (state === undefined) {
      throw new Error('Game not initialized.');
    }

    if (!state.game.isNewGame) {
      throw new Error('Cannot initialize an in-progress game.');
    }

    let game = state.game;

    while (
      game.getNumAdjacentBombs(initialRevealedPosition) !== 0 ||
      game.board.getCell(initialRevealedPosition)?.isBombed
    ) {
      game = makeNewGame(state.config);
    }

    game = game.reveal(initialRevealedPosition);

    setState({ ...state, game });
  }

  return (
    <div className={'flex flex-col items-center gap-4'}>
      <span className={'text-2xl text-white'}>
        <strong>Your Time:</strong> {timer.format()}
      </span>
      <MinesweeperGameView
        game={state.game}
        setGame={setGameSafe}
        resetGame={resetGame}
        onInitialReveal={handleInitialReveal}
      />
    </div>
  );
}

function makeNewGame(config: MinesweeperConfig): MinesweeperGame {
  const board = MinesweeperBuilder.build(config);

  return MinesweeperGame.startNewGame(board);
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
