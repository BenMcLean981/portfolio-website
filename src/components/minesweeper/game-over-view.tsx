import { GameOverlay } from './game-overlay';

export type GameOverViewProps = {
  resetGame(): void;
};

export function GameOverView(props: GameOverViewProps) {
  const { resetGame } = props;

  return (
    <GameOverlay resetGame={resetGame}>
      <span
        className={'text-4xl bg-neutral-800 p-4 rounded-lg text-neutral-100'}
      >
        Game Over
      </span>
    </GameOverlay>
  );
}
