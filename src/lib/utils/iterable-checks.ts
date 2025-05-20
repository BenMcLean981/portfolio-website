import {
  defaultEqualityChecker,
  type EqualityChecker,
} from '../equality/equality-checker';

export function isEmpty(iterable: Iterable<unknown>) {
  return [...iterable].length === 0;
}

export function equalInOrder<T>(
  it1: Iterable<T>,
  it2: Iterable<T>,
  areEqual: EqualityChecker<T> = defaultEqualityChecker
): boolean {
  const arr1 = [...it1];
  const arr2 = [...it2];

  if (bothZeroLength(arr1, arr2)) {
    return true;
  }

  if (diffLength(arr1, arr2)) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const item1 = arr1[i];
    const item2 = arr2[i];

    if (!areEqual(item1, item2)) {
      return false;
    }
  }

  return true;
}

export function haveSameItems<T>(
  it1: Iterable<T>,
  it2: Iterable<T>,
  check: EqualityChecker<T> = defaultEqualityChecker
): boolean {
  if (bothZeroLength<T>(it1, it2)) {
    return true;
  }

  if (diffLength<T>(it1, it2)) {
    return false;
  }

  return haveSameItems_sameLength(it1, it2, check);
}

function haveSameItems_sameLength<T>(
  it1: Iterable<T>,
  it2: Iterable<T>,
  check: EqualityChecker<T>
) {
  const arr1 = [...it1];
  let arr2 = [...it2];

  for (let i = 0; i < arr1.length; i++) {
    const item1: T = arr1[i];

    const i2 = arr2.findIndex((item2) => check(item1, item2));
    if (i2 === -1) {
      return false;
    } else {
      arr2 = remoteAtIndex(arr2, i2);
    }
  }

  return true;
}

function remoteAtIndex<T>(arr: Array<T>, i2: number): Array<T> {
  const before = arr.slice(0, i2);
  const after = arr.slice(i2 + 1);

  return [...before, ...after];
}

export function diffLength<T>(it1: Iterable<T>, it2: Iterable<T>) {
  return getSize(it1) !== getSize(it2);
}

export function bothZeroLength<T>(it1: Iterable<T>, it2: Iterable<T>) {
  return getSize(it1) === 0 && getSize(it2) === 0;
}

export function getSize(it: Iterable<unknown>): number {
  return [...it].length;
}
