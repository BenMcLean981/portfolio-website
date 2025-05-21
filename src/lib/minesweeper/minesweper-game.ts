import { notUndefined } from '../utils/utils';
import { type MinesweeperBoard } from './minesweeper-board';
import { type Position } from './position';

export class MinesweeperGame {
  private readonly _board: MinesweeperBoard;

  private readonly _states: Record<string, CellState>;

  private readonly _numAdjacentBombs: Record<string, number>;

  private readonly _isGameOver: boolean;

  private constructor(
    board: MinesweeperBoard,
    states: Record<string, CellState>,
    numAdjacentBombs: Record<string, number>,
    isGameOver: boolean
  ) {
    this._board = board;
    this._states = states;
    this._numAdjacentBombs = numAdjacentBombs;
    this._isGameOver = isGameOver;
  }

  public static startNewGame(board: MinesweeperBoard): MinesweeperGame {
    const numAdjacentBombs: Record<string, number> = {};

    for (const cell of board.cells) {
      numAdjacentBombs[getKey(cell.position)] = [...cell.position.neighbors]
        .map((p) => board.getCell(p))
        .filter(notUndefined)
        .filter((c) => c.isBombed).length;
    }

    return new MinesweeperGame(board, {}, numAdjacentBombs, false);
  }

  public get isGameOver(): boolean {
    return this._isGameOver;
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

    return new MinesweeperGame(
      this._board,
      states,
      this._numAdjacentBombs,
      this._isGameOver
    );
  }

  private addFlag(position: Position) {
    const states: Record<string, CellState> = {
      ...this._states,
      [getKey(position)]: 'Flagged',
    };

    return new MinesweeperGame(
      this._board,
      states,
      this._numAdjacentBombs,
      this._isGameOver
    );
  }

  public reveal(position: Position): MinesweeperGame {
    if (this.isRevealed(position)) {
      throw new Error(
        `Cannot reveal position ${position.toString()} which is already revealed.`
      );
    }

    if (this.isFlagged(position)) {
      return this;
    }

    const states: Record<string, CellState> = {
      ...this._states,
      [getKey(position)]: 'Revealed',
    };

    const cell = this._board.getCell(position);

    if (cell === undefined) {
      throw new Error('Cannot find cell.');
    }

    const revealed = new MinesweeperGame(
      this._board,
      states,
      this._numAdjacentBombs,
      cell.isBombed
    );

    if (this.getNumAdjacentBombs(position) === 0) {
      return revealed.revealNeighbors(position);
    } else {
      return revealed;
    }
  }

  private revealNeighbors(position: Position): MinesweeperGame {
    return [...position.neighbors]
      .filter((p) => this._board.getCell(p) !== undefined)
      .reduce(
        (g, p) => (g.isRevealed(p) ? g : g.reveal(p)),
        this as MinesweeperGame
      );
  }

  public isRevealed(position: Position): boolean {
    return this._states[getKey(position)] === 'Revealed';
  }

  public isFlagged(position: Position): boolean {
    return this._states[getKey(position)] === 'Flagged';
  }

  public getNumAdjacentBombs(position: Position): number {
    return this._numAdjacentBombs[getKey(position)];
  }
}

type CellState = 'Revealed' | 'Flagged' | undefined;

function getKey(position: Position): string {
  return `${position.row},${position.column}`;
}
