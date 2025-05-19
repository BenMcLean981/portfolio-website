import { type PropsWithChildren } from 'react';

export function ResponsiveContainer(props: PropsWithChildren) {
  return (
    <div className="xl:mx-48 lg:mx-36 md:mx-12 sm:mx-6 mx-4">
      {props.children}
    </div>
  );
}
