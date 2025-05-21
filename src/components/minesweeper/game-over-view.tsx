export type GameOverViewProps = {
  resetGame(): void;
};

export function GameOverView(props: GameOverViewProps) {
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
          <span
            className={
              'text-4xl bg-neutral-800 p-4 rounded-lg text-neutral-100'
            }
          >
            Game Over
          </span>
          <button
            className={
              'bg-blue-800 p-4 text-2xl text-neutral-100 rounded-lg cursor-pointer'
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
