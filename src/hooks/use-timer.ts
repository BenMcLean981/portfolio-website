import { useEffect, useState } from 'react';

export interface Timer {
  seconds: number;
  isEnabled: boolean;

  reset(): void;
  disable(): void;
  enable(): void;

  format(): string;
}

export function useTimer(): Timer {
  const [isEnabled, setIsEnabled] = useState(false);
  const [seconds, setSeconds] = useState(0);

  function reset() {
    setSeconds(0);
    setIsEnabled(false);
  }

  function enable() {
    setIsEnabled(true);
  }

  function disable() {
    setIsEnabled(false);
  }

  function format(): string {
    const minutes = Math.floor(seconds / 60);
    const remSecs = seconds % 60;

    if (minutes === 0) {
      return remSecs.toFixed(1);
    } else {
      return `${minutes}:${remSecs.toFixed(1).padStart(4, '0')}`; //4 = tens, ones, dec, tenths
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isEnabled) {
        setSeconds((s) => s + 0.1);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [isEnabled]);

  return {
    seconds,
    isEnabled,
    reset,
    enable,
    disable,
    format,
  };
}
