import { type MinesweeperConfig } from '../../lib/minesweeper/minesweeper-config';

export type NamedMinesweeperConfig = MinesweeperConfig & { name: string };

export type MinesweeperConfigSelectorProps = {
  configOptions: ReadonlyArray<NamedMinesweeperConfig>;

  setConfig(config: MinesweeperConfig): void;
};

export function MinesweeperConfigSelector(
  props: MinesweeperConfigSelectorProps
) {
  const { configOptions, setConfig } = props;

  return (
    <div className={'flex justify-center gap-4 flex-wrap'}>
      {configOptions.map((option) => (
        <button
          key={getKey(option)}
          className={
            'flex min-w-44 cursor-pointer flex-col border border-edge-soft/50 p-5 text-left text-edge transition-colors hover:border-straw'
          }
          onClick={() => setConfig(option)}
        >
          <span
            className={
              'mb-2 font-[family-name:var(--font-condensed)] text-3xl font-bold'
            }
          >
            {option.name}
          </span>
          <span>
            <strong>Rows:</strong> {option.numRows}
          </span>
          <span>
            <strong>Columns:</strong> {option.numColumns}
          </span>
          <span>
            <strong>Bombs:</strong> {option.numBombs}
          </span>
        </button>
      ))}
    </div>
  );
}

function getKey(config: MinesweeperConfig): string {
  return `${config.numRows}-${config.numColumns}-${config.numBombs}`;
}
