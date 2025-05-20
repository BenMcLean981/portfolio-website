import { describe, expect, it } from 'vitest';
import { equalInOrder, haveSameItems, isEmpty } from '../iterable-checks';

const areEqual = (n1: number, n2: number) => n1 === n2;

describe('isEmpty', () => {
  it('Returns true for empty.', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('Returns false for empty.', () => {
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty([1, 2])).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
  });
});

describe('equalInOrder', () => {
  it('Returns true for both of zero length.', () => {
    expect(equalInOrder([], [], areEqual)).toBe(true);
  });

  it('Returns false for different lengths.', () => {
    expect(equalInOrder([], [1], areEqual)).toBe(false);
    expect(equalInOrder([1], [], areEqual)).toBe(false);
  });

  it('Returns false for not equal in order.', () => {
    expect(equalInOrder([1, 2, 3], [3, 2, 1], areEqual)).toBe(false);
  });

  it('Returns true for equal in order.', () => {
    expect(equalInOrder([1, 2, 3], [1, 2, 3], areEqual)).toBe(true);
  });
});

describe('haveSameItems', () => {
  it('Returns true for empty.', () => {
    expect(haveSameItems([], [], () => false)).toBe(true);
  });

  it('Returns false for different sizes', () => {
    expect(haveSameItems([], [1], () => true)).toBe(false);
    expect(haveSameItems([1], [], () => true)).toBe(false);
  });

  it('Returns true for equal in order.', () => {
    expect(haveSameItems([1, 2, 3], [1, 2, 3], areEqual)).toBe(true);
  });

  it('Returns true for same items.', () => {
    expect(haveSameItems([1, 2, 3], [2, 1, 3], areEqual)).toBe(true);
  });

  it('Returns false for different items.', () => {
    expect(haveSameItems([1, 2, 0], [2, 1, 3], areEqual)).toBe(false);
    expect(haveSameItems([1, 1, 1], [2, 1, 1], areEqual)).toBe(false);
  });
});
