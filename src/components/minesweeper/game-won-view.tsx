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
        className={'text-4xl bg-neutral-800 p-4 rounded-lg text-neutral-100'}
      >
        Game Won
      </span>
      <TimeSubmitRow milliseconds={milliseconds} submitTime={submitTime} />
    </GameOverlay>
  );
}
