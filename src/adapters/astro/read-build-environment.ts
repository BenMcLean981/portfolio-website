import { type BuildEnvironment } from '../../lib/build-info/build-info';

/**
 * Variables set by the host, like Cloudflare's WORKERS_CI_BRANCH, arrive in
 * process.env. Values from .env files arrive in import.meta.env.
 */
export function readBuildEnvironment(): BuildEnvironment {
  return { ...process.env, ...import.meta.env };
}
