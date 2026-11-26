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
              className="w-full border border-edge-soft/50 bg-plate px-4 py-2 text-edge placeholder:text-edge-soft"
              maxLength={16}
              minLength={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button
            disabled={!isValid}
            className={
              'h-full cursor-pointer text-nowrap bg-straw px-4 font-[family-name:var(--font-condensed)] text-lg font-bold text-table disabled:cursor-not-allowed disabled:opacity-40'
            }
            onClick={handleSubmit}
          >
            Submit Time
          </button>
        </div>
      );
    case 'Loading':
      return (
        <span className={'bg-kerf px-4 py-2 text-lg text-edge'}>
          Loading...
        </span>
      );
    case 'Done':
      return (
        <span className={'bg-kerf px-4 py-2 text-lg text-edge'}>
          Done! (Refresh Page)
        </span>
      );
  }
}
