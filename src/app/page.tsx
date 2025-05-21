import Image from 'next/image';
import { Anchor } from '../components/utils/anchor';
import { H1, H2 } from '../components/utils/headings';
import { HorizontalRow } from '../components/utils/horizontal-row';
import { ListItem } from '../components/utils/list-item';
import { OrderedList } from '../components/utils/ordered-list';
import { Paragraph } from '../components/utils/paragraph';
import { UnorderedList } from '../components/utils/unordered-list';

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-md font-medium dark:text-white italic">
        The views expressed on this website are mine alone and do not
        necessarily reflect the views of my employer.
      </p>
      <HorizontalRow />
      <H1>
        Ben McLean<span className={'hidden sm:inline'}> |</span>
        <span className={'inline sm:hidden'}>
          :<br />
        </span>{' '}
        Full Stack Developer
      </H1>
      <Paragraph>
        My name is Ben McLean, I am {getAgeInYears()} years old and am employed
        at Catalyst Technologies. Catalyst develops software to be used in the
        agricultural sector. I am currently working on several NextJS TypeScript
        Applications.
      </Paragraph>
      <Paragraph>
        My previous role was at Inovatech Engineering, a Lincoln Electric
        company. I helped maintain a large .NET/C# codebase, but also did some
        projects with TypeScript, React and Python.
      </Paragraph>
      <Paragraph>
        In June 2022 I graduated Cum Laude from the University of Ottawa. I
        completed a double degree in which I studied Mechanical Engineering and
        Computing Technology. I participated in the co-op program where I
        discovered that I greatly enjoy writing software. I am passionate about
        software and engineering, and I hope to be able to use my skills to make
        a positive impact on the world.
      </Paragraph>
      <HorizontalRow />

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
      <HorizontalRow />

      <H1>My Projects</H1>
      <Paragraph>
        I&apos;m currently working on several projects, including:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <strong>This Website:</strong> whose source code you can clone{' '}
          <Anchor
            href="https://github.com/BenMcLean981/BenMcLean981.github.io"
            newWindow
          >
            here!
          </Anchor>{' '}
          This website is a full blown NextJS application hosted on Vercel. It
          features a CI/CD pipeline, automated testing, and a small game.
          Originally, this application was a statically generated
          create-react-app hosted on GitHub pages but the React community has
          moved decisively towards frameworks.
        </ListItem>
        <ListItem>
          <strong>E-Cad:</strong> An R&D project I have hoped to spin into a
          side business. This project is closed source, but is currently in a
          state where it can be demoed.
        </ListItem>
        <ListItem>
          <strong>Syncify:</strong> Another R&D project for synchronizing
          datastores in a manner similar to git. Syncify is still in development
          and quite immature, but can be viewed{' '}
          <Anchor href={'https://github.com/BenMcLean981/syncify'} newWindow>
            here.
          </Anchor>
          . Syncify was a spin-off project from E-Cad.
        </ListItem>
        <ListItem>
          <strong>Work Projects:</strong> I cannot discuss these in detail due
          to confidentiality. What I can say is that I have developed a platform
          of applications and libraries for my employer who is in the AgTech
          (Agricultural Technology) sector. Some of these projects involve AI,
          some are more traditional business apps.
        </ListItem>
      </UnorderedList>
      <HorizontalRow />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div>
          <Paragraph>Some of my past projects include:</Paragraph>
          <UnorderedList>
            <ListItem>
              <strong>A Cut time estimator:</strong> I created a web application
              to help sales representatives provide estimates on the cut time of
              a robotic CNC plasma cutter. The tool loaded the 3D part file,
              calculated the cuts necessary and prepared them into tool paths.
              Then it found an optimized ordering of tool paths, and calculated
              the total time.
            </ListItem>
            <ListItem>
              <strong>Plate Nester:</strong> I developed a working 2D plate
              nester. A user could load a list of part files, select a piece of
              rectangular stock, and have the parts placed optimally inside of
              the stock. I developed a 2D geometry library for this, all
              in-house in TypeScript.
            </ListItem>
            <ListItem>
              <Anchor href="https://ottawaavgroup.square.site/" newWindow>
                OAVG&apos;s Autonomous Snowplow
              </Anchor>{' '}
              (shown here). I mostly did some of the manufacturing and assembly
              work. I also helped to document the electrical and mechanical
              design of the robot. And I wrote some ROS code to simulate it when
              Covid-19 forced the competition online.
            </ListItem>
          </UnorderedList>
        </div>
        <div className="relative flex justify-center">
          <Image
            src={'/images/snowplow.png'}
            alt="autonomous snowplow"
            className={'object-contain object-center'}
            width={752}
            height={501}
          />
        </div>
      </div>
      <HorizontalRow />
      <div>
        <H1>Technologies</H1>
        <div>
          <Paragraph>
            I&apos;d be interested in learning anything, but these are the
            technologies I currently feel competent with.
          </Paragraph>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1">
            <div>
              <H2>Languages</H2>
              <OrderedList>
                <ListItem>TypeScript (JavaScript)</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>C#/.NET</ListItem>
                <ListItem>Java</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>Rust</ListItem>
                <ListItem>C/C++</ListItem>
              </OrderedList>
            </div>
            <div>
              <H2>Libraries and Frameworks</H2>
              <UnorderedList>
                <ListItem>NextJS (React)</ListItem>
                <ListItem>Tailwind CSS</ListItem>
                <ListItem>Fastify</ListItem>
                <ListItem>NestJS</ListItem>
                <ListItem>Flask</ListItem>
                <ListItem>SQLAlchemy</ListItem>
                <ListItem>Express</ListItem>
              </UnorderedList>
            </div>
            <div>
              <H2>Tools</H2>
              <UnorderedList>
                <ListItem>Git</ListItem>
                <ListItem>VSCode</ListItem>
                <ListItem>Visual Studio</ListItem>
                <ListItem>IntelliJ IDEA</ListItem>
                <ListItem>Kubernetes and Docker</ListItem>
                <ListItem>Azure Devops (CI/CD)</ListItem>
                <ListItem>Azure Cloud</ListItem>
              </UnorderedList>
            </div>
            <div>
              <H2>Other</H2>
              <UnorderedList>
                <ListItem>Automated Testing (Jest)</ListItem>
                <ListItem>GitHub</ListItem>
                <ListItem>REST APIs</ListItem>
                <ListItem>SQL (MySQL and PostgreSQL)</ListItem>
                <ListItem>
                  Build Tools like Vite, TSUP, Webpack, ESBuild
                </ListItem>
              </UnorderedList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getAgeInYears() {
  const DATE_OF_BIRTH = new Date(1999, 2, 19);
  const today = new Date();
  const milliseconds = today.getTime() - DATE_OF_BIRTH.getTime();
  const years = milliseconds / 1000 / 3600 / 24 / 365.24225;

  return Math.floor(years);
}
