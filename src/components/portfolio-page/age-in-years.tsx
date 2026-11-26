'use client';

import { useEffect, useState } from 'react';

export type AgeInYearsProps = {
  dateOfBirth: Date;

  renderedAt: number;
};

// Starts from the render-time clock so server and client markup match, then
// switches to the browser clock so a prerendered page never shows a stale age.
export function AgeInYears(props: AgeInYearsProps) {
  const { dateOfBirth, renderedAt } = props;

  const [now, setNow] = useState(renderedAt);

  useEffect(() => {
    setNow(Date.now());
  }, []);

  return <>{getAgeInYears(dateOfBirth, now)}</>;
}

function getAgeInYears(dateOfBirth: Date, now: number) {
  const milliseconds = now - dateOfBirth.getTime();
  const years = milliseconds / 1000 / 3600 / 24 / 365.24225;

  return Math.floor(years);
}
