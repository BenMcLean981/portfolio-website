import { useState } from 'react';

export type TimeSubmitRowProps = {
  milliseconds: number;

  submitTime(milliseconds: number, name: string): Promise<void>;
};

type Status = 'Ready' | 'Loading' | 'Done';

export function TimeSubmitRow(props: TimeSubmitRowProps) {
  const { milliseconds, submitTime } = props;

  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<Status>('Ready');

  const isValid = name.length >= 3 && name.length <= 16 && milliseconds > 1000;

  function handleSubmit() {
    setStatus('Loading');

    submitTime(milliseconds, name).then(() => setStatus('Done'));
  }

  switch (status) {
    case 'Ready':
      return (
        <div className={'flex gap-4'}>
          <label className="block w-full max-w-md">
            <input
              type="email"
              name="email"
              placeholder="Your Name"
              className="w-full rounded-lg border border-line bg-raised px-4 py-2 text-strong placeholder:text-muted"
              maxLength={16}
              minLength={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button
            disabled={!isValid}
            className={
              'h-full cursor-pointer rounded-lg bg-accent px-4 font-semibold text-nowrap text-surface disabled:cursor-not-allowed disabled:opacity-40'
            }
            onClick={handleSubmit}
          >
            Submit Time
          </button>
        </div>
      );
    case 'Loading':
      return (
        <span
          className={'rounded-lg border border-line bg-raised px-4 py-2 text-strong'}
        >
          Loading...
        </span>
      );
    case 'Done':
      return (
        <span
          className={'rounded-lg border border-line bg-raised px-4 py-2 text-strong'}
        >
          Done! (Refresh Page)
        </span>
      );
  }
}
