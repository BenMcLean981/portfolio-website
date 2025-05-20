export function transpose<T>(
  arr: ReadonlyArray<ReadonlyArray<T>>
): ReadonlyArray<ReadonlyArray<T>> {
  const result: Array<Array<T>> = [];

  const resultCols = arr.length;
  const resultRows = arr[0].length;

  for (let i = 0; i < resultRows; i++) {
    const row: Array<T> = [];

    for (let j = 0; j < resultCols; j++) {
      row.push(arr[j][i]);
    }

    result.push(row);
  }

  return result;
}

export function applyTimes<T>(initial: T, cb: (t: T) => T, times: number): T {
  let result = initial;

  for (let i = 0; i < times; i++) {
    result = cb(result);
  }

  return result;
}

export function notUndefined<T>(t: T | undefined): t is T {
  return t !== undefined;
}
