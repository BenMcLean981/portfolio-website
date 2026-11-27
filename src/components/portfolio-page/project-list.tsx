import { type ReactNode } from 'react';

export type Project = {
  name: ReactNode;
  description: ReactNode;
};

export type ProjectListProps = {
  projects: ReadonlyArray<Project>;
};

export function ProjectList(props: ProjectListProps) {
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
      {props.projects.map((project, index) => (
        <div key={index}>
          <dt className="font-semibold text-accent-soft">{project.name}</dt>
          <dd className="mt-1 leading-[1.7]">{project.description}</dd>
        </div>
      ))}
    </dl>
  );
}
