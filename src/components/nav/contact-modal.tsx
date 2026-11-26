import { type PropsWithChildren, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaX } from 'react-icons/fa6';
import { useOutsideAlerter } from '../../hooks/use-outside-alerter';
import { Anchor } from '../typography/anchor';
import { ButtonContainer } from './button-container';

const LINKS = [
  { name: 'GitHub', href: 'https://github.com/BenMcLean981', Icon: FaGithub },
  {
    name: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/12833553/bigbadbenny',
    Icon: FaStackOverflow,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/BenMcLean981',
    Icon: FaLinkedin,
  },
];

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
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
          open ? '' : 'hidden'
        }`}
        id="contact-modal"
      >
        <div className="fixed inset-0 bg-paper/85" />
        <div
          ref={ref}
          role="dialog"
          aria-labelledby="contact-title"
          className="relative w-full max-w-sm border-[1.5px] border-ink bg-paper p-1.5"
        >
          <div className="border border-ink px-6 py-5">
            <div className="flex items-baseline justify-between gap-8 border-b border-construction pb-3">
              <h2
                id="contact-title"
                className="lettering text-2xl font-semibold text-ink"
              >
                Contact
              </h2>
              <button onClick={forceClose} aria-label="Close">
                <ButtonContainer>
                  <FaX size={16} />
                </ButtonContainer>
              </button>
            </div>
            <p className="mt-4 text-lg text-ink">
              <Anchor href="mailto:BenMcLean981@gmail.com">
                BenMcLean981@gmail.com
              </Anchor>
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {LINKS.map(({ name, href, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="lettering inline-flex items-center gap-3 text-lg font-medium text-ink transition-colors hover:text-redline"
                  >
                    <Icon size={20} aria-hidden="true" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button onClick={toggleOpen}>{props.children}</button>
    </div>
  );
}
