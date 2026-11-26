import { type ReactNode } from 'react';

export type Project = {
  name: ReactNode;
  description: ReactNode;
};

export type ProjectListProps = {
  projects: ReadonlyArray<Project>;
  columns?: 1 | 2;
};

export function ProjectList(props: ProjectListProps) {
  return (
    <dl
      className={`grid grid-cols-1 gap-x-10 gap-y-6 ${props.columns === 2 ? 'md:grid-cols-2' : ''}`}
    >
      {props.projects.map((project, index) => (
        <div key={index}>
          <dt className="mb-1 font-[family-name:var(--font-condensed)] text-2xl font-semibold text-edge">
            {project.name}
          </dt>
          <dd className="max-w-[64ch] text-[1.0625rem] leading-relaxed text-edge">
            {project.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}
