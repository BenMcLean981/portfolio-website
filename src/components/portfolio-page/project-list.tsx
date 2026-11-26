import { type ReactNode } from 'react';

export type Project = {
  name: ReactNode;
  description: ReactNode;
};

export type ProjectListProps = {
  projects: ReadonlyArray<Project>;
};

/** Projects as paragraphs with run-in heads, the way a book sets them. */
export function ProjectList(props: ProjectListProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.projects.map((project, index) => (
        <p
          key={index}
          className="max-w-[40rem] text-[1.1875rem] leading-[1.7] text-ink"
        >
          <span className="small-caps font-semibold">{project.name}.</span>{' '}
          {project.description}
        </p>
      ))}
    </div>
  );
}
