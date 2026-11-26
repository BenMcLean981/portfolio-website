import { GameOverlay } from './game-overlay';
import { TimeSubmitRow } from './time-submit-row';

export type GameWonViewProps = {
  milliseconds: number;

  submitTime(milliseconds: number, name: string): Promise<void>;

  resetGame(): void;
};

export function GameWonView(props: GameWonViewProps) {
  const { milliseconds, submitTime, resetGame } = props;

  return (
    <GameOverlay resetGame={resetGame}>
      <span
        className={
          'bg-kerf px-6 py-3 font-[family-name:var(--font-condensed)] text-4xl font-bold text-edge'
        }
      >
        Game Won
      </span>
      <TimeSubmitRow milliseconds={milliseconds} submitTime={submitTime} />
    </GameOverlay>
  );
}
