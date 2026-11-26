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
            'flex min-w-44 cursor-pointer flex-col border border-rule bg-paper px-6 py-5 text-left text-ink transition-colors hover:border-cloth'
          }
          onClick={() => setConfig(option)}
        >
          <span className={'mb-2 text-2xl italic'}>{option.name}</span>
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
