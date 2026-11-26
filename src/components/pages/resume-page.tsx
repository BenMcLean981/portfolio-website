import { H1 } from '../typography/headings';
import { HorizontalRow } from '../typography/horizontal-row';

export function ResumePage() {
  return (
    <>
      <H1>My Resume</H1>
      <HorizontalRow />
      <div className="h-screen w-full">
        <iframe
          src="/resume.pdf"
          className="w-full h-full border-0"
          title="Resume"
        />
      </div>
    </>
  );
}
