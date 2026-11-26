import { Nest } from '../cut/nest';
import { Part } from '../cut/part';
import { MinesweeperSection } from '../minesweeper/minesweeper-section';
import { Anchor } from '../typography/anchor';
import { H1 } from '../typography/headings';
import { Paragraph } from '../typography/paragraph';

export function MinesweeperPage() {
  return (
    <Nest>
      <Part>
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
      </Part>
      <Part>
        <MinesweeperSection />
      </Part>
    </Nest>
  );
}
