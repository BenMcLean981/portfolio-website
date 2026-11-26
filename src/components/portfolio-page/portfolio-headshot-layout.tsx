import { Stack } from '../stack';
import { HorizontalRow } from '../typography/horizontal-row';
import { Headshot } from './headshot';
import { Introduction } from './introduction';
import { Passions } from './passions';

export type PortfolioHeadshotLayoutProps = {
  renderedAt: number;
};

export function PortfolioHeadshotLayout(props: PortfolioHeadshotLayoutProps) {
  return (
    <>
      <div className="block md:hidden">
        <SmallLayout {...props} />
      </div>

      <div className="hidden md:block 2xl:hidden">
        <MediumLayout {...props} />
      </div>

      <div className="hidden 2xl:block">
        <LargeLayout {...props} />
      </div>
    </>
  );
}

function SmallLayout(props: PortfolioHeadshotLayoutProps) {
  return (
    <Stack>
      <Headshot />
      <HorizontalRow />
      <Introduction renderedAt={props.renderedAt} />
      <HorizontalRow />
      <Passions />
    </Stack>
  );
}

function MediumLayout(props: PortfolioHeadshotLayoutProps) {
  return (
    <>
      <div className={'flex flex-row gap-4'}>
        <div className={'w-1/2 lg:w-10/16 2xl:w-11/16'}>
          <Stack>
            <Introduction renderedAt={props.renderedAt} />
          </Stack>
        </div>
        <div className={'grow'}>
          <Headshot />
        </div>
      </div>
      <HorizontalRow />
      <Passions />
    </>
  );
}

function LargeLayout(props: PortfolioHeadshotLayoutProps) {
  return (
    <div className={'flex flex-row gap-4'}>
      <div className={'w-11/16'}>
        <Stack>
          <Introduction renderedAt={props.renderedAt} />
          <HorizontalRow />
          <Passions />
        </Stack>
      </div>
      <div className={'grow'}>
        <Headshot />
      </div>
    </div>
  );
}
