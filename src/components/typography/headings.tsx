import { type PropsWithChildren } from 'react';

export function H1(props: PropsWithChildren) {
  return (
    <h1 className="mb-5 text-[2.1rem] leading-tight font-semibold tracking-[-0.01em] text-ink">
      {props.children}
    </h1>
  );
}

export function H2(props: PropsWithChildren) {
  return (
    <h2 className="mb-3 text-2xl leading-snug font-semibold text-ink">
      {props.children}
    </h2>
  );
}

export function H3(props: PropsWithChildren) {
  return (
    <h3 className="mb-2 text-xl font-semibold text-ink italic">
      {props.children}
    </h3>
  );
}

export function H4(props: PropsWithChildren) {
  return (
    <h4 className="mb-2 text-lg font-semibold text-ink">{props.children}</h4>
  );
}

export function H5(props: PropsWithChildren) {
  return (
    <h5 className="mb-1 text-base font-semibold text-ink">{props.children}</h5>
  );
}

export function H6(props: PropsWithChildren) {
  return (
    <h6 className="mb-1 text-sm font-semibold text-ink">{props.children}</h6>
  );
}
