import { Anchor } from '../../components/typography/anchor';
import { H1, H2 } from '../../components/typography/headings';
import { ListItem } from '../../components/typography/list-item';
import { Paragraph } from '../../components/typography/paragraph';
import { UnorderedList } from '../../components/typography/unordered-list';

export default async function Page() {
  return (
    <>
      <H1>Advent Of Code</H1>
      <Paragraph>
        Each year around the holidays a coding challenge is posted{' '}
        <Anchor href="https://adventofcode.com/" newWindow>
          online
        </Anchor>
        . It always gets a lot of attention on Twitter, Reddit, and Hackernews.
        I sometimes use it to try to learn new technologies like rust. The
        challenges get progressively more difficult, and I typically make it to
        the day 15-20 before dropping off to focus on family.
      </Paragraph>
      <br />
      <H2>Years</H2>
      <UnorderedList>
        <ListItem>
          <Anchor
            href="https://github.com/BenMcLean981/advent-of-code-2024"
            newWindow
          >
            <strong>2024:</strong>
          </Anchor>{' '}
          This was my first year done in TypeScript. I didn&apos;t want to
          struggle with a complicated language like Rust, and instead wanted to
          focus on solving fun problems in a language I knew very well!
        </ListItem>
        <ListItem>
          <Anchor
            href="https://github.com/BenMcLean981/advent-of-code-2023"
            newWindow
          >
            <strong>2023:</strong>
          </Anchor>{' '}
          Done in Rust
        </ListItem>
        <ListItem>
          <strong>2022: </strong> Due to an unfortunate accident I lost my 2022
          solution. This was my first year done in Rust.
        </ListItem>
        <ListItem>
          <Anchor
            href="https://github.com/BenMcLean981/advent-of-code-2021"
            newWindow
          >
            <strong>2021:</strong>
          </Anchor>{' '}
          Done in Python
        </ListItem>
      </UnorderedList>
    </>
  );
}
