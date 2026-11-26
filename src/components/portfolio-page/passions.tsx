import { H1 } from '../typography/headings';
import { Paragraph } from '../typography/paragraph';

const PASSIONS = [
  'Climate Change',
  'Space Exploration',
  'Sustainability',
  'Robotics and Automation',
  'Access to Education',
];

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
      <ul className="mt-2 flex flex-wrap gap-x-8 gap-y-2">
        {PASSIONS.map((passion) => (
          <li
            key={passion}
            className="lettering border-b border-construction pb-1 text-xl font-medium text-ink"
          >
            {passion}
          </li>
        ))}
      </ul>
    </>
  );
}
