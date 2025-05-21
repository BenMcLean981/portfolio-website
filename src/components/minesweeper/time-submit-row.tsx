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
              className="w-full px-4 py-2 border bg-neutral-200 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              maxLength={16}
              minLength={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button
            disabled={!isValid}
            className={
              'h-full bg-neutral-800 px-4 rounded-lg text-neutral-100 text-nowrap cursor-pointer enabled:active:translate-y-1 disabled:bg-neutral-600'
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
          className={'bg-neutral-800 px-4 py-2 rounded-lg text-lg text-white'}
        >
          Loading...
        </span>
      );
    case 'Done':
      return (
        <span
          className={'bg-neutral-500 px-4 py-2 rounded-lg text-lg text-white'}
        >
          Done! (Refresh Page)
        </span>
      );
  }
}
