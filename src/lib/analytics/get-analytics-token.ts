import { type BuildEnvironment } from '../build-info/build-info';

/**
 * The Cloudflare Web Analytics token, but only on production builds, so
 * preview deploys and local runs never count as visits.
 */
export function getAnalyticsToken(env: BuildEnvironment): string | undefined {
  return isProductionBuild(env)
    ? env.PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN
    : undefined;
}

const PRODUCTION_BRANCH = 'main';

function isProductionBuild(env: BuildEnvironment): boolean {
  return env.WORKERS_CI_BRANCH === PRODUCTION_BRANCH;
}
