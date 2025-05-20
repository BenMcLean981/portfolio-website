export interface Equalable {
  equals(other: unknown, tol?: number): boolean;
}

export function isEqualable(t: unknown): t is Equalable {
  return (
    typeof t === 'object' &&
    t !== null &&
    'equals' in t &&
    typeof t.equals === 'function'
  );
}
