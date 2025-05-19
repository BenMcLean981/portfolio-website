import { type PropsWithChildren, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa6';
import { useOutsideAlerter } from '../../hooks/use-outside-alerter';
import { Anchor } from '../utils/anchor';
import { H4, H5 } from '../utils/headings';
import { HorizontalRow } from '../utils/horizontal-row';

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
        className={`fade fixed top-0 left-0 transform duration-300 w-full h-screen flex justify-center items-center bg-zinc-900 bg-opacity-75 ${
          open ? '' : 'hidden'
        }`}
        id="contact-modal"
      >
        <div
          ref={ref}
          className="w-1/2 xl:w-1/3 flex-col bg-slate-800 rounded-3xl p-4 border"
        >
          <div className="flex justify-between">
            <H4>Contact Information</H4>
            <button onClick={forceClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                transform={`rotate(45deg)`}
                className="icon"
                stroke={'#fff'}
                width={24}
                height={24}
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="20" y1="4" x2="4" y2="20" />
                <line x1="4" y1="4" x2="20" y2="20" />
              </svg>
            </button>
          </div>
          <hr className="mb-2" />
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
                >
                  <FaGithub className="text-zinc-900 rounded" />
                </a>
                <a
                  className="text-4xl bg-zinc-700 w-10 text-center rounded"
                  href="https://stackoverflow.com/users/12833553/bigbadbenny"
                >
                  <FaStackOverflow className="text-orange-500 rounded" />
                </a>
                <a
                  className="text-4xl bg-white w-10 text-center rounded"
                  href="https://www.linkedin.com/in/BenMcLean981"
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
