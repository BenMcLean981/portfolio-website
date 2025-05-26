import { type PropsWithChildren, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaX } from 'react-icons/fa6';
import { useOutsideAlerter } from '../../hooks/use-outside-alerter';
import { Anchor } from '../typography/anchor';
import { H2, H5 } from '../typography/headings';
import { HorizontalRow } from '../typography/horizontal-row';
import { ButtonContainer } from './button-container';

export function ContactCard(props: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  function toggleOpen() {
    setOpen((open) => !open);
  }

  function forceClose() {
    setOpen(false);
  }

  useOutsideAlerter(ref, forceClose);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center ${
          open ? '' : 'hidden'
        }`}
        id="contact-modal"
      >
        <div
          className={
            'fixed top-0 left-0 opacity-75 bg-neutral-500 w-full h-full'
          }
        />
        <div
          ref={ref}
          className="z-10 min-w-[300px] flex-col bg-neutral-100 dark:bg-slate-800 rounded-lg p-4 border dark:border-neutral-500"
        >
          <div className="flex justify-between align-center gap-16">
            <H2>Contact Information</H2>
            <button onClick={forceClose}>
              <ButtonContainer>
                <FaX size={24} />
              </ButtonContainer>
            </button>
          </div>
          <HorizontalRow />
          <div>
            <H5>
              <strong>Name: </strong> Ben McLean
            </H5>
            <H5>
              <strong>Email: </strong>
              <Anchor href="mailto:BenMcLean981@gmail.com">
                BenMcLean981@gmail.com
              </Anchor>
            </H5>
          </div>
          <HorizontalRow />
          <div>
            <div className="flex flex-col items-center w-full">
              <H5>Links</H5>
              <div className="flex justify-center gap-x-4">
                <a
                  className="text-4xl bg-white w-10 text-center rounded"
                  href="https://github.com/BenMcLean981"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-zinc-900 rounded" />
                </a>
                <a
                  className="text-4xl bg-zinc-700 w-10 text-center rounded"
                  href="https://stackoverflow.com/users/12833553/bigbadbenny"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaStackOverflow className="text-orange-500 rounded" />
                </a>
                <a
                  className="text-4xl bg-white w-10 text-center rounded"
                  href="https://www.linkedin.com/in/BenMcLean981"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-blue-600 rounded" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={toggleOpen}>{props.children}</button>
    </div>
  );
}
