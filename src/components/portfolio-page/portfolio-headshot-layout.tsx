import { Figure } from '../book/figure';
import { Spread } from '../book/spread';
import { Headshot } from './headshot';
import { Introduction } from './introduction';
import { Title } from './title';

export type PortfolioHeadshotLayoutProps = {
  renderedAt: number;
};

export function PortfolioHeadshotLayout(props: PortfolioHeadshotLayoutProps) {
  return (
    <div>
      <Title />
      <Spread
        margin={
          <div className="max-w-xs">
            <Figure number={1} caption="The author.">
              <Headshot />
            </Figure>
          </div>
        }
      >
        <Introduction renderedAt={props.renderedAt} />
      </Spread>
    </div>
  );
}
