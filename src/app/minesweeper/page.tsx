import { MinesweeperSection } from '../../components/minesweeper/minesweeper-section';
import { Anchor } from '../../components/typography/anchor';
import { H1 } from '../../components/typography/headings';
import { HorizontalRow } from '../../components/typography/horizontal-row';
import { Paragraph } from '../../components/typography/paragraph';

export default function Page() {
  return (
    <>
      <H1>Minesweeper</H1>
      <Paragraph>
        I decided to make a game of minesweeper in typescript. I chose
        minesweeper because the rules are well known, and it should be a good
        way to demonstrate my frontend capabilities. Check out the code{' '}
        <Anchor
          href="https://github.dev/BenMcLean981/portfolio-website/blob/main/src/minesweeper/page.tsx"
          newWindow
        >
          here!
        </Anchor>
      </Paragraph>
      <HorizontalRow />
      <MinesweeperSection />
    </>
  );
}
