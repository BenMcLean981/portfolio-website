import { type PropsWithChildren } from 'react';

export type GameOverlayProps = {
  resetGame(): void;
};

export function GameOverlay(props: PropsWithChildren<GameOverlayProps>) {
  const { resetGame } = props;

  return (
    <>
      <div className={'absolute inset-0 bg-paper/75'} />
      <div className={'absolute top-0 left-0 bottom-0 right-0'}>
        <div
          className={
            'w-full h-full flex flex-col items-center justify-center gap-4'
          }
        >
          {props.children}
          <button
            className={
              'lettering mt-16 cursor-pointer border border-ink bg-ink px-6 py-3 text-xl font-semibold text-paper transition-colors hover:bg-redline hover:border-redline'
            }
            onClick={resetGame}
          >
            Start Over?
          </button>
        </div>
      </div>
    </>
  );
}
