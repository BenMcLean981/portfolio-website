import { type ReactNode } from 'react';
import { Figure } from '../book/figure';
import { Spread } from '../book/spread';
import { Passions } from '../portfolio-page/passions';
import { PortfolioHeadshotLayout } from '../portfolio-page/portfolio-headshot-layout';
import { type Project, ProjectList } from '../portfolio-page/project-list';
import { Anchor } from '../typography/anchor';
import { H1 } from '../typography/headings';
import { Paragraph } from '../typography/paragraph';

export type HomePageProps = {
  renderedAt: number;
};

export function HomePage(props: HomePageProps) {
  return (
    <div className="flex flex-col gap-20 lg:gap-24">
      <PortfolioHeadshotLayout renderedAt={props.renderedAt} />

      <Spread>
        <Passions />
      </Spread>

      <Spread>
        <H1>My Projects</H1>
        <Paragraph>
          I&apos;m currently working on several projects, including:
        </Paragraph>
        <ProjectList projects={CURRENT_PROJECTS} />
      </Spread>

      <Spread
        margin={
          <Figure number={2} caption="OAVG’s autonomous snowplow.">
            <img
              src={'/images/snowplow.png'}
              alt="autonomous snowplow"
              className={'w-full'}
              width={752}
              height={501}
              loading={'lazy'}
            />
          </Figure>
        }
      >
        <Paragraph>Some of my past projects include:</Paragraph>
        <ProjectList projects={PAST_PROJECTS} />
      </Spread>

      <section>
        <Spread>
          <H1>Technologies</H1>
          <Paragraph>
            I&apos;d be interested in learning anything, but these are the
            technologies I currently feel competent with.
          </Paragraph>
        </Spread>
        <div className="mt-4 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          <TechnologyGroup title="Languages" ordered>
            {[
              'TypeScript (JavaScript)',
              'Python',
              'C#/.NET',
              'Java',
              'SQL',
              'Rust',
              'C/C++',
            ]}
          </TechnologyGroup>
          <TechnologyGroup title="Libraries and Frameworks">
            {[
              'NextJS (React)',
              'Tailwind CSS',
              'Fastify',
              'NestJS',
              'Flask',
              'SQLAlchemy',
              'Express',
            ]}
          </TechnologyGroup>
          <TechnologyGroup title="Tools">
            {[
              'Git',
              'VSCode',
              'Visual Studio',
              'IntelliJ IDEA',
              'Kubernetes and Docker',
              'Azure Devops (CI/CD)',
              'Azure Cloud',
            ]}
          </TechnologyGroup>
          <TechnologyGroup title="Other">
            {[
              'Automated Testing (Jest)',
              'GitHub',
              'REST APIs',
              'SQL (MySQL and PostgreSQL)',
              'Build Tools like Vite, TSUP, Webpack, ESBuild',
            ]}
          </TechnologyGroup>
        </div>
      </section>
    </div>
  );
}

const CURRENT_PROJECTS: ReadonlyArray<Project> = [
  {
    name: 'This website',
    description: (
      <>
        You can clone its source code{' '}
        <Anchor
          href="https://github.com/BenMcLean981/portfolio-website"
          newWindow
        >
          here!
        </Anchor>{' '}
        This website is an Astro site with React islands, hosted on Cloudflare.
        It features a CI/CD pipeline, automated testing, and a small game. It
        started as a statically generated create-react-app on GitHub Pages, then
        became a Next.js application on Vercel. It moved to Astro because
        it&apos;s mostly static content with a few interactive pieces, and Astro
        serves plain HTML and only ships JavaScript for the parts that need it.
      </>
    ),
  },
  {
    name: 'E-Cad',
    description:
      'An R&D project I have hoped to spin into a side business. This project is closed source, but is currently in a state where it can be demoed.',
  },
  {
    name: 'Syncify',
    description: (
      <>
        Another R&D project for synchronizing datastores in a manner similar to
        git. Syncify is still in development and quite immature, but can be
        viewed{' '}
        <Anchor href={'https://github.com/BenMcLean981/syncify'} newWindow>
          here
        </Anchor>
        . Syncify was a spin-off project from E-Cad.
      </>
    ),
  },
  {
    name: 'Work projects',
    description:
      'I cannot discuss these in detail due to confidentiality. What I can say is that at Afresh Technologies I work on the DC (distribution center) product, building full stack applications that help grocers forecast demand for fresh food and reduce food waste across the supply chain.',
  },
];

const PAST_PROJECTS: ReadonlyArray<Project> = [
  {
    name: 'Cut time estimator',
    description:
      'I created a web application to help sales representatives provide estimates on the cut time of a robotic CNC plasma cutter. The tool loaded the 3D part file, calculated the cuts necessary and prepared them into tool paths. Then it found an optimized ordering of tool paths, and calculated the total time.',
  },
  {
    name: 'Plate nester',
    description:
      'I developed a working 2D plate nester. A user could load a list of part files, select a piece of rectangular stock, and have the parts placed optimally inside of the stock. I developed a 2D geometry library for this, all in-house in TypeScript.',
  },
  {
    name: (
      <Anchor href="https://ottawaavgroup.square.site/" newWindow>
        OAVG&apos;s Autonomous Snowplow
      </Anchor>
    ),
    description:
      'I mostly did some of the manufacturing and assembly work. I also helped to document the electrical and mechanical design of the robot. And I wrote some ROS code to simulate it when Covid-19 forced the competition online.',
  },
];

type TechnologyGroupProps = {
  title: string;
  ordered?: boolean;
  children: ReadonlyArray<ReactNode>;
};

function TechnologyGroup(props: TechnologyGroupProps) {
  const List = props.ordered ? 'ol' : 'ul';

  return (
    <div>
      <h2 className="mb-2 text-lg text-ink italic">{props.title}</h2>
      <List
        className={`flex flex-col gap-0.5 text-[1.0625rem] leading-relaxed text-ink ${
          props.ordered ? 'ml-5 list-decimal marker:text-ink-soft' : ''
        }`}
      >
        {props.children.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </List>
    </div>
  );
}
