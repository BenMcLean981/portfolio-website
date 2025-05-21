import { beforeEach, describe, expect, it } from 'vitest';
import { MinesweeperBoard } from '../minesweeper-board';
import { MinesweeperCell } from '../minesweeper-cell';
import { MinesweeperGame } from '../minesweper-game';
import { Position } from '../position';

describe('MinesweeperGame', () => {
  let board: MinesweeperBoard;
  let game: MinesweeperGame;

  let allCells: ReadonlyArray<MinesweeperCell>;

  beforeEach(() => {
    board = MinesweeperBoard.makeFromRows([
      [
        new MinesweeperCell(new Position(0, 0), true),
        new MinesweeperCell(new Position(0, 1), false),
        new MinesweeperCell(new Position(0, 2), false),
      ],
      [
        new MinesweeperCell(new Position(1, 0), true),
        new MinesweeperCell(new Position(1, 1), false),
        new MinesweeperCell(new Position(1, 2), false),
      ],
      [
        new MinesweeperCell(new Position(2, 0), false),
        new MinesweeperCell(new Position(2, 1), false),
        new MinesweeperCell(new Position(2, 2), false),
      ],
    ]);

    game = MinesweeperGame.startNewGame(board);

    allCells = board.rows.flat();
  });

  describe('reveal', () => {
    it('All cells start off not revealed.', () => {
      for (const c of allCells) {
        expect(game.isRevealed(c.position)).toBe(false);
      }
    });

    it('Reveals one position.', () => {
      const position = new Position(0, 1);

      const withRevealed = game.reveal(position);

      expect(withRevealed.isRevealed(position)).toBe(true);

      for (const c of allCells) {
        if (!c.position.equals(position)) {
          expect(withRevealed.isRevealed(c.position)).toBe(false);
        }
      }
    });

    it('Reveals two positions.', () => {
      const p1 = new Position(2, 0);
      const p2 = new Position(0, 1);

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
      const position = allCells[2].position;

      const withFlagged = game.toggleFlag(position);

      expect(withFlagged.isFlagged(position)).toBe(true);

      for (const c of allCells) {
        if (!c.position.equals(position)) {
          expect(withFlagged.isFlagged(c.position)).toBe(false);
        }
      }
    });

    it('Removes flag.', () => {
      const p1 = allCells[2].position;
      const p2 = allCells[6].position;

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

  it('Gets zero for no bombs.', () => {
    expect(game.getNumAdjacentBombs(new Position(0, 2))).toEqual(0);
    expect(game.getNumAdjacentBombs(new Position(1, 2))).toEqual(0);
    expect(game.getNumAdjacentBombs(new Position(2, 2))).toEqual(0);
  });

  it('Gets one for one adjacent bomb.', () => {
    expect(game.getNumAdjacentBombs(new Position(2, 0))).toEqual(1);
    expect(game.getNumAdjacentBombs(new Position(2, 1))).toEqual(1);
  });

  it('Gets two for two adjacent bombs.', () => {
    expect(game.getNumAdjacentBombs(new Position(0, 1))).toEqual(2);
    expect(game.getNumAdjacentBombs(new Position(1, 1))).toEqual(2);
  });
});
