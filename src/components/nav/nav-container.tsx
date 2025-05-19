import { type PropsWithChildren } from 'react';

export function NavContainer(props: PropsWithChildren) {
  return (
    <span className="font-semibold text-gray-500 text-lg fill-gray-500 hover:text-blue-500 hover:fill-blue-500 hover:cursor-pointer transition duration-150">
      {props.children}
    </span>
  );
}
