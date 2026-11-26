import { Part } from '../cut/part';
import { Headshot } from './headshot';
import { Introduction } from './introduction';
import { Passions } from './passions';
import { Title } from './title';

export type PortfolioHeadshotLayoutProps = {
  renderedAt: number;
};

export function PortfolioHeadshotLayout(props: PortfolioHeadshotLayoutProps) {
  return (
    <>
      <Part className="lg:col-span-8">
        <Title />
      </Part>
      <section className="col-span-12 bg-plate sm:col-span-8 sm:col-start-3 lg:col-span-4 lg:col-start-auto">
        <Headshot />
      </section>
      <Part className="lg:col-span-7">
        <Introduction renderedAt={props.renderedAt} />
      </Part>
      <Part className="lg:col-span-5">
        <Passions />
      </Part>
    </>
  );
}
