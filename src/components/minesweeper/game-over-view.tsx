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
          'bg-kerf px-6 py-3 font-[family-name:var(--font-condensed)] text-4xl font-bold text-edge'
        }
      >
        Game Over
      </span>
    </GameOverlay>
  );
}
