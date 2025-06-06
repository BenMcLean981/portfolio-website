import React, { useEffect, useRef, useState } from 'react';
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

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [fontSize, setFontSize] = useState<number>(16);

  useEffect(() => {
    const node = buttonRef.current;

    if (node) {
      const resizeObserver = new ResizeObserver(() => {
        // get the height of the button
        const height = node.clientHeight;
        // set font size to (say) 80% of height for padding
        setFontSize(height * 0.75);
      });

      resizeObserver.observe(node);
    }
  }, []);

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

  function getTextColorClass(): string {
    switch (numAdjacentBombs) {
      case 1:
        return 'dark:text-blue-600 text-blue-700';
      case 2:
        return 'text-green-500';
      case 3:
        return 'text-red-700';
      case 4:
        return 'text-blue-900';
      case 5:
        return 'text-red-900';
      case 6:
        return 'text-cyan-700';
      case 7:
        return 'text-black';
      case 8:
        return 'text-gray-700';
      default:
        return '';
    }
  }

  function handleRightClick(e: React.MouseEvent) {
    e.preventDefault();

    if (!game.isRevealed(cell.position) && !game.isGameOver) {
      onToggleFlag(cell.position);
    }
  }

  function handleLeftClick() {
    if (!game.isRevealed(cell.position) && !game.isGameOver) {
      onReveal(cell.position);
    }
  }

  function getColorClass(): string {
    if (
      game.isRevealed(cell.position) ||
      game.isFlagged(cell.position) ||
      game.isGameOver
    ) {
      return 'bg-slate-200 dark:bg-slate-300';
    } else {
      return 'bg-slate-500 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-400';
    }
  }

  const centerClass = 'flex items-center justify-center';
  const borderClass = 'border border-neutral-500 rounded-sm';

  return (
    <button
      className={`aspect-square ${centerClass} ${getColorClass()} ${getTextColorClass()} ${borderClass} leading-none select-none cursor-pointer`}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      ref={buttonRef}
      style={{ fontSize }}
    >
      {(game.isRevealed(cell.position) ||
        game.isFlagged(cell.position) ||
        game.isGameOver) &&
        getText()}
    </button>
  );
}
