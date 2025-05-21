import { type Dispatch, type SetStateAction } from 'react';
import { type MinesweeperGame } from '../../lib/minesweeper/minesweper-game';
import { type Position } from '../../lib/minesweeper/position';
import { GameOverView } from './game-over-view';
import { GameWonView } from './game-won-view';
import { MinesweeperCellButton } from './minesweeper-cell-button';

export type MinesweeperGameViewProps = {
  game: MinesweeperGame;
  setGame: Dispatch<SetStateAction<MinesweeperGame>>;

  milliseconds: number;

  onInitialReveal(position: Position): void;

  submitTime(time: number, name: string): Promise<void>;

  resetGame(): void;
};

export function MinesweeperGameView(props: MinesweeperGameViewProps) {
  const {
    game,
    milliseconds,
    setGame,
    onInitialReveal,
    submitTime,
    resetGame,
  } = props;

  const numColumns = game.board.columns.length;

  function handleToggleFlag(position: Position): void {
    setGame((game) => game.toggleFlag(position));
  }

  function handleReveal(position: Position): void {
    if (game.isNewGame) {
      onInitialReveal(position);
    } else {
      setGame((game) => game.reveal(position));
    }
  }

  return (
    <div className={'w-full flex justify-center'}>
      <div
        className={'relative inline-grid gap-0.5 md:gap-1'}
        style={{ gridTemplateColumns: `repeat(${numColumns}, minmax(0, 48px)` }}
      >
        {game.isGameWon && (
          <GameWonView
            milliseconds={milliseconds}
            submitTime={submitTime}
            resetGame={resetGame}
          />
        )}
        {game.isGameOver && <GameOverView resetGame={resetGame} />}
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
    </div>
  );
}
