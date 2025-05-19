import { describe, expect, it } from 'vitest';
import { MinesweeperBuilder } from '../minesweeper-builder';

describe('MinesweeperBuilder', () => {
  describe('build', () => {
    it('Makes a board with the correct number of rows and columns.', () => {
      const board = MinesweeperBuilder.build({
        numRows: 3,
        numColumns: 4,
        numBombs: 2,
      });

      expect(board.rows.length).toBe(3);
      expect(board.columns.length).toBe(4);
    });

    it('Makes a board with the correct number of bombs.', () => {
      const board = MinesweeperBuilder.build({
        numRows: 3,
        numColumns: 4,
        numBombs: 2,
      });

      const bombs = board.rows.flat().filter((c) => c.isBombed);

      expect(bombs.length).toBe(2);
    });

    it('Throws an error for too few rows.', () => {
      expect(() =>
        MinesweeperBuilder.build({
          numRows: -1,
          numColumns: 4,
          numBombs: 2,
        })
      ).toThrowError();

      expect(() =>
        MinesweeperBuilder.build({
          numRows: 0,
          numColumns: 4,
          numBombs: 2,
        })
      ).toThrowError();
    });

    it('Throws an error for too few columns.', () => {
      expect(() =>
        MinesweeperBuilder.build({
          numRows: 3,
          numColumns: -1,
          numBombs: 2,
        })
      ).toThrowError();
      expect(() =>
        MinesweeperBuilder.build({
          numRows: 3,
          numColumns: 0,
          numBombs: 2,
        })
      ).toThrowError();
    });

    it('Throws an error for too many bombs.', () => {
      expect(() =>
        MinesweeperBuilder.build({
          numRows: 3,
          numColumns: 4,
          numBombs: 11,
        })
      ).not.toThrowError();

      expect(() =>
        MinesweeperBuilder.build({
          numRows: 3,
          numColumns: 4,
          numBombs: 12,
        })
      ).toThrowError();

      expect(() =>
        MinesweeperBuilder.build({
          numRows: 3,
          numColumns: 4,
          numBombs: 13,
        })
      ).toThrowError();
    });
  });
});
