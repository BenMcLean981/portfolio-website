import { GameOverlay } from './game-overlay';

export type GameOverViewProps = {
  resetGame(): void;
};

export function GameOverView(props: GameOverViewProps) {
  const { resetGame } = props;

  return (
    <GameOverlay resetGame={resetGame}>
      <span
        className={
          'border border-rule bg-paper px-6 py-3 text-4xl text-ink italic'
        }
      >
        Game Over
      </span>
    </GameOverlay>
  );
}
