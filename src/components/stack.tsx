import { type PropsWithChildren } from "react";

export function Stack(props: PropsWithChildren) {
  return <div className={'flex flex-col gap-2'}>
    {props.children}
  </div>
}