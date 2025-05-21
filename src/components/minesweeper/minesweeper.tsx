'use client';

import { type SetStateAction, useEffect, useState } from 'react';
import { useTimer } from '../../hooks/use-timer';
import { MinesweeperBuilder } from '../../lib/minesweeper/minesweeper-builder';
import { type MinesweeperConfig } from '../../lib/minesweeper/minesweeper-config';
import { MinesweeperGame } from '../../lib/minesweeper/minesweper-game';
import { type Position } from '../../lib/minesweeper/position';
import { MINESWEEPER_STORAGE_SERVICE } from '../../lib/minesweeper/storage/factory';
import { type StoredMinesweeperConfig } from '../../lib/minesweeper/storage/stored-minesweeper-config';
import { MinesweeperConfigSelector } from './minesweeper-config-selector';
import { MinesweeperGameView } from './minesweeper-game-view';

type MinesweeperProps = {
  configs: ReadonlyArray<StoredMinesweeperConfig>;
};

type GameState = {
  config: StoredMinesweeperConfig;

  game: MinesweeperGame;
};

export function Minesweeper(props: MinesweeperProps) {
  const { configs } = props;

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

  function handleSetConfig(config: StoredMinesweeperConfig) {
    const board = MinesweeperBuilder.build(config);
    const game = MinesweeperGame.startNewGame(board);

    setState({ config, game });
  }

  if (state === undefined) {
    return (
      <MinesweeperConfigSelector
        configOptions={configs}
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

  async function submitTime(milliseconds: number, name: string): Promise<void> {
    if (state === undefined) {
      throw new Error('Not configured.');
    }

    return MINESWEEPER_STORAGE_SERVICE.saveLeaderboardEntry(
      name,
      milliseconds,
      state.config
    );
  }

  return (
    <div className={'flex flex-col items-center gap-4'}>
      <span className={'text-2xl text-white'}>
        <strong>Your Time:</strong> {timer.format()}
      </span>
      <MinesweeperGameView
        game={state.game}
        milliseconds={timer.seconds * 1000}
        setGame={setGameSafe}
        resetGame={resetGame}
        submitTime={submitTime}
        onInitialReveal={handleInitialReveal}
      />
    </div>
  );
}

function makeNewGame(config: MinesweeperConfig): MinesweeperGame {
  const board = MinesweeperBuilder.build(config);

  return MinesweeperGame.startNewGame(board);
}
