export type BuildInfo = {
  sha: string | null;
};

export type BuildEnvironment = Readonly<Record<string, string | undefined>>;

export function readBuildInfo(env: BuildEnvironment): BuildInfo {
  return { sha: env.WORKERS_CI_COMMIT_SHA ?? null };
}
