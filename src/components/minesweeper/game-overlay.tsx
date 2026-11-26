import { type PropsWithChildren } from 'react';

export type GameOverlayProps = {
  resetGame(): void;
};

export function GameOverlay(props: PropsWithChildren<GameOverlayProps>) {
  const { resetGame } = props;

  return (
    <>
      <div className={'absolute inset-0 bg-plate/75'} />
      <div className={'absolute top-0 left-0 bottom-0 right-0'}>
        <div
          className={
            'w-full h-full flex flex-col items-center justify-center gap-4'
          }
        >
          {props.children}
          <button
            className={
              'mt-16 cursor-pointer bg-straw px-6 py-3 font-[family-name:var(--font-condensed)] text-2xl font-bold text-table'
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
