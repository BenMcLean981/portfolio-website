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

  function getNumberColor(): string | undefined {
    return numAdjacentBombs >= 1 && numAdjacentBombs <= 8
      ? `var(--ms-${numAdjacentBombs})`
      : undefined;
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
      return 'bg-paper border-rule/70';
    } else {
      return 'bg-rule border-rule hover:bg-cloth/40';
    }
  }

  const centerClass = 'flex items-center justify-center';
  const borderClass = 'border rounded-[3px] font-semibold lining';

  return (
    <button
      className={`aspect-square ${centerClass} ${getColorClass()} ${borderClass} leading-none select-none cursor-pointer`}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      ref={buttonRef}
      style={{ fontSize, color: getNumberColor() }}
    >
      {(game.isRevealed(cell.position) ||
        game.isFlagged(cell.position) ||
        game.isGameOver) &&
        getText()}
    </button>
  );
}
