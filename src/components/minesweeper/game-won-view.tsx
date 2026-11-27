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
          'rounded-2xl border border-line bg-raised px-6 py-3 text-3xl font-medium text-strong shadow-[0_12px_30px_-12px_rgb(0_0_0/0.6)]'
        }
      >
        Game Won
      </span>
      <TimeSubmitRow milliseconds={milliseconds} submitTime={submitTime} />
    </GameOverlay>
  );
}
