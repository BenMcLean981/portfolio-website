import { describe, expect, it } from 'vitest';
import { transpose } from '../utils';

describe('transpose', () => {
  it('Transposes a matrix.', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    const actual = transpose(arr);

    const expected = [
      [1, 4],
      [2, 5],
      [3, 6],
    ];

    expect(actual).toStrictEqual(expected);
  });
});
