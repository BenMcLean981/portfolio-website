export class Position {
  private readonly _row: number;

  private readonly _column: number;

  public constructor(row: number, column: number) {
    this._row = row;
    this._column = column;
  }

  public get row(): number {
    return this._row;
  }

  public get column(): number {
    return this._column;
  }

  public equals(other: unknown): boolean {
    if (other instanceof Position) {
      return this.row === other.row && this.column === other.column;
    } else {
      return false;
    }
  }
}
