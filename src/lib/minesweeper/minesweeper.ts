import { transpose } from '../utils';
import { type MinesweeperCell } from './minesweeper-cell';

export class Minesweeper {
  private readonly _rows: ReadonlyArray<ReadonlyArray<MinesweeperCell>>;

  private constructor(rows: ReadonlyArray<ReadonlyArray<MinesweeperCell>>) {
    this._rows = rows;
  }

  public static makeFromRows(
    rows: ReadonlyArray<ReadonlyArray<MinesweeperCell>>
  ): Minesweeper {
    return new Minesweeper(rows);
  }

  public get rows(): ReadonlyArray<ReadonlyArray<MinesweeperCell>> {
    return this._rows;
  }

  public get columns(): ReadonlyArray<ReadonlyArray<MinesweeperCell>> {
    return transpose(this._rows);
  }
}
