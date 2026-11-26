import { describe, expect, it } from 'vitest';
import { readBuildInfo } from '../build-info';

describe('readBuildInfo', () => {
  it('reads the commit SHA that Cloudflare Workers Builds provides.', () => {
    const info = readBuildInfo({ WORKERS_CI_COMMIT_SHA: 'abc123' });

    expect(info).toEqual({ sha: 'abc123' });
  });
});
