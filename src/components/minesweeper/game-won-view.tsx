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
          'lettering border border-ink bg-paper px-6 py-3 text-4xl font-semibold text-ink'
        }
      >
        Game Won
      </span>
      <TimeSubmitRow milliseconds={milliseconds} submitTime={submitTime} />
    </GameOverlay>
  );
}
