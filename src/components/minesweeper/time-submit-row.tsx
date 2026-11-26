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
              className="w-full border border-rule bg-paper px-4 py-2 text-ink placeholder:text-ink-soft"
              maxLength={16}
              minLength={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button
            disabled={!isValid}
            className={
              'h-full cursor-pointer text-nowrap bg-cloth px-4 text-paper disabled:cursor-not-allowed disabled:opacity-40'
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
          className={'border border-rule bg-paper px-4 py-2 text-lg text-ink'}
        >
          Loading...
        </span>
      );
    case 'Done':
      return (
        <span
          className={'border border-rule bg-paper px-4 py-2 text-lg text-ink'}
        >
          Done! (Refresh Page)
        </span>
      );
  }
}
