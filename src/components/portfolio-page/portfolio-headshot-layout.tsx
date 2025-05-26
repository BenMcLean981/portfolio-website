import { Stack } from '../stack';
import { HorizontalRow } from '../typography/horizontal-row';
import { Headshot } from './headshot';
import { Introduction } from './introduction';
import { Passions } from './passions';

export function PortfolioHeadshotLayout() {
  return (
    <>
      <div className="block md:hidden">
        <SmallLayout />
      </div>

      <div className="hidden md:block 2xl:hidden">
        <MediumLayout />
      </div>

      <div className="hidden 2xl:block">
        <LargeLayout />
      </div>
    </>
  );
}

function SmallLayout() {
  return (
    <Stack>
      <Introduction />
      <HorizontalRow />
      <Headshot />
      <HorizontalRow />
      <Passions />
    </Stack>
  );
}

function MediumLayout() {
  return (
    <>
      <div className={'flex flex-row gap-4'}>
        <div className={'w-1/2 lg:w-10/16 2xl:w-11/16'}>
          <Stack>
            <Introduction />
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

function LargeLayout() {
  return (
    <div className={'flex flex-row gap-4'}>
      <div className={'w-11/16'}>
        <Stack>
          <Introduction />
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
