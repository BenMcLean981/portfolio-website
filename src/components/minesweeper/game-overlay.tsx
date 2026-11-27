import { type PropsWithChildren } from 'react';

export type GameOverlayProps = {
  resetGame(): void;
};

export function GameOverlay(props: PropsWithChildren<GameOverlayProps>) {
  const { resetGame } = props;

  return (
    <>
      <div
        className={
          'absolute inset-0 rounded-lg bg-surface/75 backdrop-blur-[1px]'
        }
      />
      <div className={'absolute top-0 left-0 bottom-0 right-0'}>
        <div
          className={
            'w-full h-full flex flex-col items-center justify-center gap-4'
          }
        >
          {props.children}
          <button
            className={
              'mt-16 cursor-pointer rounded-xl bg-accent px-6 py-3 text-lg font-semibold text-surface transition-opacity hover:opacity-90'
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
