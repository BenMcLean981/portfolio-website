import { Headshot } from './headshot';
import { Introduction } from './introduction';
import { Title } from './title';

export type PortfolioHeadshotLayoutProps = {
  renderedAt: number;
};

export function PortfolioHeadshotLayout(props: PortfolioHeadshotLayoutProps) {
  return (
    <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Title />
        <div className="mt-10">
          <Introduction renderedAt={props.renderedAt} />
        </div>
      </div>
      <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none lg:pt-4">
        <Headshot />
      </div>
    </div>
  );
}
