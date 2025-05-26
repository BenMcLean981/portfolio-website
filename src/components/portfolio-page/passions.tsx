import { H1 } from '../typography/headings';
import { ListItem } from '../typography/list-item';
import { Paragraph } from '../typography/paragraph';
import { UnorderedList } from '../typography/unordered-list';

export function Passions() {
  return (
    <>
      <H1>My Passions</H1>
      <Paragraph>
        I believe that in today&apos;s world we are tasked with some of the most
        difficult problems of any generation. I like to believe that these
        problems have technical solutions and that through innovation, the most
        difficult problems can be solved. I believe that I can make a positive
        impact in the world with my talent and with good software, and I am most
        interested in working in the following fields and solving the following
        problems:
      </Paragraph>
      <UnorderedList>
        <ListItem>Climate Change</ListItem>
        <ListItem>Space Exploration</ListItem>
        <ListItem>Sustainability</ListItem>
        <ListItem>Robotics and Automation</ListItem>
        <ListItem>Access to Education</ListItem>
      </UnorderedList>
    </>
  );
}
