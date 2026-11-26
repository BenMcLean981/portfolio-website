import { Nest } from '../cut/nest';
import { Part } from '../cut/part';
import { H1 } from '../typography/headings';

export function ResumePage() {
  return (
    <Nest>
      <Part>
        <H1>My Resume</H1>
        <div className="h-screen w-full">
          <iframe
            src="/resume.pdf"
            className="w-full h-full border-0"
            title="Resume"
          />
        </div>
      </Part>
    </Nest>
  );
}
