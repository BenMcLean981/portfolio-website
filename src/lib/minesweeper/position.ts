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

  public get neighbors(): Iterable<Position> {
    return [
      new Position(this._row + 1, this._column + 1),
      new Position(this._row + 1, this._column),
      new Position(this._row + 1, this._column - 1),
      new Position(this._row, this._column + 1),
      new Position(this._row, this._column - 1),
      new Position(this._row - 1, this._column + 1),
      new Position(this._row - 1, this._column),
      new Position(this._row - 1, this._column - 1),
    ];
  }

  public equals(other: unknown): boolean {
    if (other instanceof Position) {
      return this.row === other.row && this.column === other.column;
    } else {
      return false;
    }
  }

  public toString(): string {
    return `(${this._row}, ${this._column})`;
  }
}
