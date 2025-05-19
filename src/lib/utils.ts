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
