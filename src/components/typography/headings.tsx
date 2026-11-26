import { type PropsWithChildren } from 'react';

const DISPLAY = 'font-[family-name:var(--font-condensed)] text-edge';

export function H1(props: PropsWithChildren) {
  return (
    <h1
      className={`${DISPLAY} mb-4 text-4xl leading-none font-bold md:text-5xl`}
    >
      {props.children}
    </h1>
  );
}

export function H2(props: PropsWithChildren) {
  return (
    <h2
      className={`${DISPLAY} mb-3 text-2xl leading-tight font-semibold md:text-3xl`}
    >
      {props.children}
    </h2>
  );
}

export function H3(props: PropsWithChildren) {
  return (
    <h3 className={`${DISPLAY} mb-2 text-xl font-semibold md:text-2xl`}>
      {props.children}
    </h3>
  );
}

export function H4(props: PropsWithChildren) {
  return (
    <h4 className={`${DISPLAY} mb-2 text-lg font-semibold`}>
      {props.children}
    </h4>
  );
}

export function H5(props: PropsWithChildren) {
  return (
    <h5 className={`${DISPLAY} mb-1 text-base font-semibold`}>
      {props.children}
    </h5>
  );
}

export function H6(props: PropsWithChildren) {
  return (
    <h6 className={`${DISPLAY} mb-1 text-sm font-semibold`}>
      {props.children}
    </h6>
  );
}
