import { type PropsWithChildren } from 'react';

export function H1(props: PropsWithChildren) {
  return (
    <h1 className="mb-4 text-[2rem] leading-tight font-medium tracking-[-0.02em] text-strong">
      {props.children}
    </h1>
  );
}

export function H2(props: PropsWithChildren) {
  return (
    <h2 className="mb-3 text-xl leading-snug font-medium text-strong">
      {props.children}
    </h2>
  );
}

export function H3(props: PropsWithChildren) {
  return (
    <h3 className="mb-2 text-lg font-medium text-strong">{props.children}</h3>
  );
}

export function H4(props: PropsWithChildren) {
  return (
    <h4 className="mb-2 text-base font-semibold text-strong">
      {props.children}
    </h4>
  );
}

export function H5(props: PropsWithChildren) {
  return (
    <h5 className="mb-1 text-base font-semibold text-strong">
      {props.children}
    </h5>
  );
}

export function H6(props: PropsWithChildren) {
  return (
    <h6 className="mb-1 text-sm font-semibold text-strong">{props.children}</h6>
  );
}
