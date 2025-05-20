import { type Dispatch, type SetStateAction } from 'react';
import { type MinesweeperGame } from '../../lib/minesweeper/minesweper-game';
import { type Position } from '../../lib/minesweeper/position';
import { MinesweeperCellButton } from './minesweeper-cell-button';

export type MinesweeperGameViewProps = {
  game: MinesweeperGame;
  setGame: Dispatch<SetStateAction<MinesweeperGame>>;
};

export function MinesweeperGameView(props: MinesweeperGameViewProps) {
  const { game, setGame } = props;

  const numColumns = game.board.columns.length;

  function handleToggleFlag(position: Position): void {
    setGame((game) => game.toggleFlag(position));
  }

  function handleReveal(position: Position): void {
    setGame((game) => game.reveal(position));
  }

  // Each cell should max at 48px

  return (
    <div
      className={'grid gap-2 mb-48'}
      style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}
    >
      {game.board.rows.flatMap((row) =>
        row.map((c) => (
          <MinesweeperCellButton
            key={c.position.toString()}
            cell={c}
            game={game}
            onReveal={handleReveal}
            onToggleFlag={handleToggleFlag}
          />
        ))
      )}
    </div>
  );
}
