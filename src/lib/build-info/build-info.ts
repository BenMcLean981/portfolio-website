export type BuildInfo = {
  buildHash: string | null;
};

export type BuildEnvironment = Readonly<Record<string, string | undefined>>;

export function readBuildInfo(env: BuildEnvironment): BuildInfo {
  return { buildHash: env.WORKERS_CI_COMMIT_SHA ?? null };
}
