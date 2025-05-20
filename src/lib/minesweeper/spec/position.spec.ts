import { describe, expect, it } from 'vitest';
import { haveSameItems } from '../../utils/iterable-checks';
import { Position } from '../position';

describe('Position', () => {
  it('Sets row and column.', () => {
    const p = new Position(5, 7);

    expect(p.row).toBe(5);
    expect(p.column).toBe(7);
  });

  describe('adjacents', () => {
    it('Gets the adjacent position.', () => {
      const p = new Position(5, 7);

      const expected = [
        new Position(5, 8),
        new Position(4, 8),
        new Position(4, 7),
        new Position(4, 6),
        new Position(5, 6),
        new Position(6, 6),
        new Position(6, 7),
        new Position(6, 8),
      ];

      expect(haveSameItems(p.neighbors, expected)).toBe(true);
    });
  });

  describe('equals', () => {
    it('Returns true for equal.', () => {
      const p1 = new Position(5, 7);
      const p2 = new Position(5, 7);

      expect(p1.equals(p2)).toBe(true);
    });

    it('Returns false for different rows.', () => {
      const p1 = new Position(5, 7);
      const p2 = new Position(9999, 7);

      expect(p1.equals(p2)).toBe(false);
    });

    it('Returns false for different columns.', () => {
      const p1 = new Position(5, 7);
      const p2 = new Position(5, 9999);

      expect(p1.equals(p2)).toBe(false);
    });

    it('Returns false for different types.', () => {
      const p = new Position(5, 7);

      expect(p.equals(0)).toBe(false);
    });
  });
});
