import { Stack } from '@/components/stack';
import Image from 'next/image';
import { PortfolioHeadshotLayout } from '../components/portfolio-page/portfolio-headshot-layout';
import { Title } from '../components/portfolio-page/title';
import { Anchor } from '../components/typography/anchor';
import { H1, H2 } from '../components/typography/headings';
import { HorizontalRow } from '../components/typography/horizontal-row';
import { ListItem } from '../components/typography/list-item';
import { OrderedList } from '../components/typography/ordered-list';
import { Paragraph } from '../components/typography/paragraph';
import { UnorderedList } from '../components/typography/unordered-list';

export default function Home() {
  return (
    <Stack>
      <p className="text-center text-md font-medium dark:text-white italic">
        The views expressed on this website are mine alone and do not
        necessarily reflect the views of my employer.
      </p>
      <HorizontalRow />
      <Title />
      <HorizontalRow />

      <PortfolioHeadshotLayout />

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
    </Stack>
  );
}
