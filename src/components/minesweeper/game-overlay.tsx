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
          'absolute top-0 left-0 bottom-0 right-0 bg-neutral-500 opacity-50'
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
              'bg-blue-800 p-4 text-2xl text-neutral-100 rounded-lg cursor-pointer mt-16 active:translate-y-1'
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
