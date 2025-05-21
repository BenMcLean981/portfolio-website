import { H1 } from '../../components/utils/headings';
import { HorizontalRow } from '../../components/utils/horizontal-row';

export default async function Page() {
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
