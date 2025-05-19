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
            'bg-zinc-300 rounded border dark:border-white p-4 flex flex-col hover:cursor-pointer hover:bg-zinc-400 transition duration-100'
          }
          onClick={() => setConfig(option)}
        >
          <span className={'text-center text-2xl font-bold'}>
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
