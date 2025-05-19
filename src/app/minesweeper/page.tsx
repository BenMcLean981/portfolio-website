import { Minesweeper } from '../../components/minesweeper/minesweeper';
import { Anchor } from '../../components/utils/anchor';
import { H1 } from '../../components/utils/headings';
import { HorizontalRow } from '../../components/utils/horizontal-row';
import { Paragraph } from '../../components/utils/paragraph';

export default async function Page() {
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
      <Minesweeper />
    </>
  );
}
