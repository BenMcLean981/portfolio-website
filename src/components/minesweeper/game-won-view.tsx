import { GameOverlay } from './game-overlay';

export type GameWonViewProps = {
  resetGame(): void;
};

export function GameWonView(props: GameWonViewProps) {
  const { resetGame } = props;

  return (
    <GameOverlay>
      <span
        className={'text-4xl bg-neutral-800 p-4 rounded-lg text-neutral-100'}
      >
        Game Won
      </span>
      <button
        className={
          'bg-blue-800 p-4 text-2xl text-neutral-100 rounded-lg cursor-pointer'
        }
        onClick={resetGame}
      >
        Start Over?
      </button>
    </GameOverlay>
  );
}
