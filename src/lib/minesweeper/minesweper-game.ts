import { notUndefined } from '../utils/utils';
import { type MinesweeperBoard } from './minesweeper-board';
import { type Position } from './position';

export class MinesweeperGame {
  private readonly _board: MinesweeperBoard;

  private readonly _states: Record<string, CellState>;

  private constructor(
    board: MinesweeperBoard,
    states: Record<string, CellState>
  ) {
    this._board = board;
    this._states = states;
  }

  public static startNewGame(board: MinesweeperBoard): MinesweeperGame {
    return new MinesweeperGame(board, {});
  }

  public get isGameOver(): boolean {
    return this._board.cells.some(
      (c) => this.isRevealed(c.position) && c.isBombed
    );
  }

  public get board(): MinesweeperBoard {
    return this._board;
  }

  public toggleFlag(position: Position): MinesweeperGame {
    if (this.isRevealed(position)) {
      throw new Error(
        `Cannot toggle flag of position ${position.toString()} which is already revealed.`
      );
    }

    if (this.isFlagged(position)) {
      return this.removeFlag(position);
    } else {
      return this.addFlag(position);
    }
  }

  private removeFlag(position: Position) {
    const states: Record<string, CellState> = {
      ...this._states,
    };

    delete states[getKey(position)];

    return new MinesweeperGame(this._board, states);
  }

  private addFlag(position: Position) {
    const states: Record<string, CellState> = {
      ...this._states,
      [getKey(position)]: 'Flagged',
    };

    return new MinesweeperGame(this._board, states);
  }

  public reveal(position: Position): MinesweeperGame {
    if (this.isRevealed(position)) {
      throw new Error(
        `Cannot reveal position ${position.toString()} which is already revealed.`
      );
    }

    const states: Record<string, CellState> = {
      ...this._states,
      [getKey(position)]: 'Revealed',
    };

    const revealed = new MinesweeperGame(this._board, states);

    if (this.getNumAdjacentBombs(position) === 0) {
      return [...position.neighbors]
        .filter((p) => this._board.getCell(p) !== undefined)
        .reduce(
          (game, p) => (game.isRevealed(p) ? game : game.reveal(p)),
          revealed
        );
    } else {
      return revealed;
    }
  }

  public isRevealed(position: Position): boolean {
    return this._states[getKey(position)] === 'Revealed';
  }

  public isFlagged(position: Position): boolean {
    return this._states[getKey(position)] === 'Flagged';
  }

  public getNumAdjacentBombs(position: Position): number {
    return [...position.neighbors]
      .map((p) => this._board.getCell(p))
      .filter(notUndefined)
      .filter((c) => c.isBombed).length;
  }
}

type CellState = 'Revealed' | 'Flagged' | undefined;

function getKey(position: Position): string {
  return `${position.row},${position.column}`;
}
