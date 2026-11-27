import { describe, expect, it } from 'vitest';
import { getAnalyticsToken } from '../get-analytics-token';

describe('getAnalyticsToken', () => {
  it('returns the token on production builds.', () => {
    const token = getAnalyticsToken({
      WORKERS_CI_BRANCH: 'main',
      PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN: 'abc123',
    });

    expect(token).toBe('abc123');
  });

  it.each([
    ['a preview branch', 'post/on-craftsmanship'],
    ['a local build', undefined],
  ])('leaves analytics off on %s.', (_, branch) => {
    const token = getAnalyticsToken({
      WORKERS_CI_BRANCH: branch,
      PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN: 'abc123',
    });

    expect(token).toBeUndefined();
  });
});
