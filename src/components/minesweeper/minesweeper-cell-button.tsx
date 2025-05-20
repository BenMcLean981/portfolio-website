import React from 'react';
import { type MinesweeperCell } from '../../lib/minesweeper/minesweeper-cell';
import { type MinesweeperGame } from '../../lib/minesweeper/minesweper-game';
import { type Position } from '../../lib/minesweeper/position';

export type MinesweeperCellButtonProps = {
  cell: MinesweeperCell;

  game: MinesweeperGame;

  onToggleFlag(position: Position): void;
  onReveal(position: Position): void;
};

export function MinesweeperCellButton(props: MinesweeperCellButtonProps) {
  const { cell, game, onToggleFlag, onReveal } = props;

  const isRevealed = game.isRevealed(cell.position);
  const isFlagged = game.isFlagged(cell.position);
  const isBombed = cell.isBombed;
  const numAdjacentBombs = game.getNumAdjacentBombs(cell.position);

  function getText(): string {
    if (isFlagged && isBombed && game.isGameOver) {
      return '💣';
    } else if (isFlagged && !isBombed && game.isGameOver) {
      return '❌';
    } else if (isFlagged && !isRevealed) {
      return '🚩';
    } else if (isBombed && isRevealed) {
      return '💣';
    } else if (isRevealed && numAdjacentBombs === 0) {
      return '';
    } else if (isRevealed) {
      return numAdjacentBombs.toString();
    } else {
      return '';
    }
  }

  function handleRightClick(e: React.MouseEvent) {
    e.preventDefault();

    onToggleFlag(cell.position);
  }

  function handleLeftClick() {
    if (!game.isRevealed(cell.position)) {
      onReveal(cell.position);
    }
  }

  function getColorClass(): string {
    if (game.isRevealed(cell.position)) {
      return 'bg-slate-500';
    } else {
      return 'bg-slate-700 hover:bg-slate-500';
    }
  }

  const centerClass = 'flex items-center justify-center';
  const borderClass = 'border border-neutral-500 rounded-sm';

  return (
    <button
      className={`aspect-square ${centerClass} ${getColorClass()} ${borderClass} select-none cursor-pointer`}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {getText()}
    </button>
  );
}
