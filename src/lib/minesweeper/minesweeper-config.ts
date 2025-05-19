export type MinesweeperConfig = {
  numRows: number;

  numColumns: number;

  numBombs: number;
};

export function validateConfig(config: MinesweeperConfig): void {
  validateNumRows(config);
  validateNumColumns(config);

  validateNumBombs(config);
}

function validateNumRows(config: MinesweeperConfig): void {
  if (config.numRows <= 0) {
    throw new Error(`Too few rows (${config.numRows}), must be > 0.`);
  }
}

function validateNumColumns(config: MinesweeperConfig): void {
  if (config.numColumns <= 0) {
    throw new Error(`Too few columns (${config.numColumns}), must be > 0.`);
  }
}

function validateNumBombs(config: MinesweeperConfig): void {
  const numCells = config.numRows * config.numColumns;

  if (config.numBombs >= numCells) {
    throw new Error(
      `Too many bombs (${config.numBombs}), must be < number of cells (${numCells}).`
    );
  }
}
