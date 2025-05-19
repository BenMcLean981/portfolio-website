import { type Position } from './position';

export class MinesweeperCell {
  private readonly _position: Position;

  private readonly _isBombed: boolean;

  public constructor(position: Position, isBombed: boolean) {
    this._position = position;
    this._isBombed = isBombed;
  }

  public get position(): Position {
    return this._position;
  }

  public get isBombed(): boolean {
    return this._isBombed;
  }

  public setIsBombed(isBombed: boolean): MinesweeperCell {
    return new MinesweeperCell(this._position, isBombed);
  }
}
