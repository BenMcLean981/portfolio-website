import { applyTimes } from '../utils/utils';
import { MinesweeperBoard } from './minesweeper-board';
import { MinesweeperCell } from './minesweeper-cell';
import { type MinesweeperConfig, validateConfig } from './minesweeper-config';
import { Position } from './position';

export class MinesweeperBuilder {
  private readonly _rows: ReadonlyArray<ReadonlyArray<MinesweeperCell>>;

  public constructor(rows: ReadonlyArray<ReadonlyArray<MinesweeperCell>>) {
    this._rows = rows;
  }

  public static build(config: MinesweeperConfig): MinesweeperBoard {
    validateConfig(config);

    const builder = MinesweeperBuilder.initialize(
      config.numRows,
      config.numColumns
    );

    const withBombs = applyTimes(
      builder,
      (b) => b.addRandomBomb(),
      config.numBombs
    );

    return withBombs.board;
  }

  private static initialize(
    numRows: number,
    numColumns: number
  ): MinesweeperBuilder {
    const rows: Array<ReadonlyArray<MinesweeperCell>> = [];

    for (let i = 0; i < numRows; i++) {
      const row: Array<MinesweeperCell> = [];

      for (let j = 0; j < numColumns; j++) {
        const position = new Position(i, j);
        const cell = new MinesweeperCell(position, false);

        row.push(cell);
      }

      rows.push(row);
    }

    return new MinesweeperBuilder(rows);
  }

  private get board(): MinesweeperBoard {
    return MinesweeperBoard.makeFromRows(this._rows);
  }

  private addRandomBomb(): MinesweeperBuilder {
    const noBombs = this._rows.flat().filter((c) => !c.isBombed);
    const possiblePositions = noBombs.map((c) => c.position);

    if (possiblePositions.length === 0) {
      throw new Error(`No cells left to bomb.`);
    }

    const randomIndex = Math.floor(Math.random() * possiblePositions.length);
    const positionToBomb = possiblePositions[randomIndex];

    const newRows = this._rows.map((row) =>
      row.map((c) =>
        c.position.equals(positionToBomb) ? c.setIsBombed(true) : c
      )
    );

    return new MinesweeperBuilder(newRows);
  }
}
