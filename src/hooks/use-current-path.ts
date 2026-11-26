import { useEffect, useState } from 'react';

export function useCurrentPath(): string | undefined {
  const [path, setPath] = useState<string | undefined>(undefined);

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return path;
}
