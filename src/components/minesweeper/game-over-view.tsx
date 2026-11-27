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
          'rounded-2xl border border-line bg-raised px-6 py-3 text-3xl font-medium text-strong shadow-[0_12px_30px_-12px_rgb(0_0_0/0.6)]'
        }
      >
        Game Over
      </span>
    </GameOverlay>
  );
}
