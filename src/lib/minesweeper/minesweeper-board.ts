import { transpose } from '../utils/utils';
import { type MinesweeperCell } from './minesweeper-cell';
import { type Position } from './position';

export class MinesweeperBoard {
  private readonly _rows: ReadonlyArray<ReadonlyArray<MinesweeperCell>>;

  private constructor(rows: ReadonlyArray<ReadonlyArray<MinesweeperCell>>) {
    this._rows = rows;
  }

  public static makeFromRows(
    rows: ReadonlyArray<ReadonlyArray<MinesweeperCell>>
  ): MinesweeperBoard {
    return new MinesweeperBoard(rows);
  }

  public get rows(): ReadonlyArray<ReadonlyArray<MinesweeperCell>> {
    return this._rows;
  }

  public get columns(): ReadonlyArray<ReadonlyArray<MinesweeperCell>> {
    return transpose(this._rows);
  }

  public get cells(): ReadonlyArray<MinesweeperCell> {
    return this._rows.flat();
  }

  public getCell(position: Position): MinesweeperCell | undefined {
    return this.cells.find((c) => c.position.equals(position));
  }
}
