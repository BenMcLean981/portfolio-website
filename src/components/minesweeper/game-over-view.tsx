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
          'lettering border border-ink bg-paper px-6 py-3 text-4xl font-semibold text-ink'
        }
      >
        Game Over
      </span>
    </GameOverlay>
  );
}
