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
    <dl className="grid grid-cols-1 gap-x-10 md:grid-cols-[13rem_1fr]">
      {props.projects.map((project, index) => (
        <div
          key={index}
          className="grid grid-cols-subgrid border-t border-construction py-5 md:col-span-2"
        >
          <dt className="lettering mb-2 text-xl font-semibold text-ink md:mb-0">
            {project.name}
          </dt>
          <dd className="max-w-[68ch] text-lg leading-relaxed text-ink">
            {project.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}
