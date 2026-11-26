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
          'border border-rule bg-paper px-6 py-3 text-4xl text-ink italic'
        }
      >
        Game Won
      </span>
      <TimeSubmitRow milliseconds={milliseconds} submitTime={submitTime} />
    </GameOverlay>
  );
}
