import { CutName } from '../cut/cut-name';

export function Title() {
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <h1>
        <CutName />
      </h1>
      <p className="font-[family-name:var(--font-condensed)] text-2xl font-semibold text-edge-soft md:text-3xl">
        Full stack developer
      </p>
    </div>
  );
}
