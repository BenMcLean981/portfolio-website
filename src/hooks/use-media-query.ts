import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean | undefined {
  const [matches, setMatches] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (window !== undefined && matches === undefined) {
      setMatches(window.matchMedia(query).matches !== null);
    }
  }, [matches, query]);

  useEffect(() => {
    function updateMatches() {
      const media = window.matchMedia(query);

      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    }

    updateMatches();

    window.addEventListener('resize', updateMatches);

    return () => window.removeEventListener('resize', updateMatches);
  }, [query, matches]);

  return matches;
}
