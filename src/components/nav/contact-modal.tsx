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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px]" />
        <div
          ref={ref}
          role="dialog"
          aria-labelledby="contact-title"
          className="relative w-full max-w-sm rounded-2xl border border-line bg-raised px-7 py-6 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.6)]"
        >
          <div className="flex items-center justify-between gap-8">
            <h2 id="contact-title" className="text-xl font-semibold text-strong">
              Contact
            </h2>
            <button onClick={forceClose} aria-label="Close">
              <ButtonContainer>
                <FaX size={14} />
              </ButtonContainer>
            </button>
          </div>
          <p className="mt-3 text-[1.0625rem]">
            <Anchor href="mailto:BenMcLean981@gmail.com">
              BenMcLean981@gmail.com
            </Anchor>
          </p>
          <ul className="mt-5 flex flex-col gap-1 border-t border-line pt-4">
            {LINKS.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="-mx-2 flex items-center gap-3 rounded-lg px-2 py-1.5 text-body transition-colors hover:bg-strong/5 hover:text-strong"
                >
                  <Icon
                    size={18}
                    aria-hidden="true"
                    className="text-accent"
                  />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={toggleOpen}>{props.children}</button>
    </div>
  );
}
