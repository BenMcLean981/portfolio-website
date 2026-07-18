import { Paragraph } from '../typography/paragraph';

export function Introduction() {
  return (
    <>
      <Paragraph>Hi! Thank you for visiting my portfolio website!</Paragraph>
      <Paragraph>
        My name is Ben McLean, I&apos;m a {getAgeInYears()} year old software
        developer. I&apos;m a passionate problem solver and I enjoy developing
        high-quality well crafted software. I&apos;m currently a full stack
        engineer at Afresh Technologies, where I work on the DC (distribution
        center) product. Afresh builds AI-powered software that helps grocers
        forecast demand for fresh food, cutting down on food waste across the
        supply chain — a mission I&apos;m proud to contribute to.
      </Paragraph>
      <Paragraph>
        Previously I worked at Catalyst Reaction Technologies Ltd., where I
        developed software for companies in the Agricultural sector, maintaining
        a system of several frontend and backend applications along with
        associated software libraries. Before that I was at Inovatech
        Engineering, a Lincoln Electric company, where I helped maintain a large
        .NET/C# codebase and also did some projects with TypeScript, React and
        Python. I worked on robotic CNC plasma cutters, and developed software
        for CAD/CAM, geometry, and robotics applications.
      </Paragraph>
      <Paragraph>
        In June 2022 I graduated Cum Laude from the University of Ottawa. I
        completed a double degree in which I studied Mechanical Engineering and
        Computing Technology. I participated in the co-op program where I
        discovered that I greatly enjoy writing software. I am passionate about
        software and engineering, and I hope to be able to use my skills to make
        a positive impact on the world.
      </Paragraph>
    </>
  );
}

function getAgeInYears() {
  const DATE_OF_BIRTH = new Date(1999, 2, 19);
  const today = new Date();
  const milliseconds = today.getTime() - DATE_OF_BIRTH.getTime();
  const years = milliseconds / 1000 / 3600 / 24 / 365.24225;

  return Math.floor(years);
}
