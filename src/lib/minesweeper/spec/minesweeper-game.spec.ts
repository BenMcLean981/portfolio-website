import { beforeEach, describe, expect, it } from 'vitest';
import { type MinesweeperBoard } from '../minesweeper-board';
import { MinesweeperBuilder } from '../minesweeper-builder';
import { type MinesweeperCell } from '../minesweeper-cell';
import { MinesweeperGame } from '../minesweper-game';

describe('MinesweeperGame', () => {
  let board: MinesweeperBoard;
  let game: MinesweeperGame;

  let allCells: ReadonlyArray<MinesweeperCell>;
  let bombedCells: ReadonlyArray<MinesweeperCell>;
  let safeCells: ReadonlyArray<MinesweeperCell>;

  beforeEach(() => {
    board = MinesweeperBuilder.build({
      numRows: 6,
      numColumns: 8,
      numBombs: 4,
    });

    game = MinesweeperGame.startNewGame(board);

    allCells = board.rows.flat();
    bombedCells = allCells.filter((c) => c.isBombed);
    safeCells = allCells.filter((c) => !c.isBombed);
  });

  describe('reveal', () => {
    it('All cells start off not revealed.', () => {
      for (const c of allCells) {
        expect(game.isRevealed(c.position)).toBe(false);
      }
    });

    it('Reveals one position.', () => {
      const position = allCells[15].position;

      const withRevealed = game.reveal(position);

      expect(withRevealed.isRevealed(position)).toBe(true);

      for (const c of allCells) {
        if (!c.position.equals(position)) {
          expect(withRevealed.isRevealed(c.position)).toBe(false);
        }
      }
    });

    it('Reveals two positions.', () => {
      const p1 = allCells[15].position;
      const p2 = allCells[25].position;

      const withRevealed = game.reveal(p1).reveal(p2);

      expect(withRevealed.isRevealed(p1)).toBe(true);
      expect(withRevealed.isRevealed(p2)).toBe(true);

      for (const c of allCells) {
        if (!c.position.equals(p1) && !c.position.equals(p2)) {
          expect(withRevealed.isRevealed(c.position)).toBe(false);
        }
      }
    });
  });

  describe('toggleFlag', () => {
    it('All cells start off not flagged.', () => {
      for (const c of allCells) {
        expect(game.isFlagged(c.position)).toBe(false);
      }
    });

    it('Flags one position.', () => {
      const position = allCells[15].position;

      const withFlagged = game.toggleFlag(position);

      expect(withFlagged.isFlagged(position)).toBe(true);

      for (const c of allCells) {
        if (!c.position.equals(position)) {
          expect(withFlagged.isFlagged(c.position)).toBe(false);
        }
      }
    });

    it('Removes flag.', () => {
      const p1 = allCells[15].position;
      const p2 = allCells[25].position;

      const withNotFlagged = game.toggleFlag(p1).toggleFlag(p2).toggleFlag(p1);

      expect(withNotFlagged.isFlagged(p1)).toBe(false);
      expect(withNotFlagged.isFlagged(p2)).toBe(true);

      for (const c of allCells) {
        if (!c.position.equals(p2)) {
          expect(withNotFlagged.isFlagged(c.position)).toBe(false);
        }
      }
    });
  });
});
