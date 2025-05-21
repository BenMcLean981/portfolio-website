import { type PropsWithChildren } from 'react';

export function GameOverlay(props: PropsWithChildren) {
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
        </div>
      </div>
    </>
  );
}
