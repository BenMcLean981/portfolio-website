import {
  type PostgrestError,
  type SupabaseClient,
} from '@supabase/supabase-js';
import { type MinesweeperStorageService } from './minesweeper-storage-service';
import { type StoredMinesweeperConfig } from './stored-minesweeper-config';
import { type StoredMinesweeperLeaderboardEntry } from './stored-minesweeper-leaderboard-entry';

export class SupabaseMinesweeperStorageService
  implements MinesweeperStorageService
{
  private readonly _supabase: SupabaseClient;

  public constructor(supabase: SupabaseClient) {
    this._supabase = supabase;
  }

  public async getConfigs(): Promise<ReadonlyArray<StoredMinesweeperConfig>> {
    const { data, error } = await this._supabase
      .from('minesweeper_configs')
      .select();

    if (error) {
      throwPostgrestError(error);
    } else if (data === null) {
      throw new Error('Minesweeper config SELECT failed.');
    }

    return data.map(
      (d): StoredMinesweeperConfig => ({
        id: d.id,
        name: d.name,
        numRows: d.num_rows,
        numColumns: d.num_columns,
        numBombs: d.num_bombs,
      })
    );
  }

  public async getLeaderboardEntries(
    config: StoredMinesweeperConfig,
    limit: number = 10
  ): Promise<ReadonlyArray<StoredMinesweeperLeaderboardEntry>> {
    if (config.id === undefined) {
      throw new Error(`Missing config id.`);
    }

    const { data, error } = await this._supabase
      .from('minesweeper_leaderboard_entries')
      .select()
      .eq('minesweeper_config_id', config.id)
      .order('milliseconds', { ascending: false })
      .limit(limit);

    if (error) {
      throwPostgrestError(error);
    } else if (data === null) {
      throw new Error('Minesweeper leaderboard SELECT failed.');
    }

    return data.map(
      (d): StoredMinesweeperLeaderboardEntry => ({
        id: d.id,
        name: d.name,
        milliseconds: d.milliseconds,
      })
    );
  }

  public async saveLeaderboardEntry(
    name: string,
    milliseconds: number,
    config: StoredMinesweeperConfig
  ): Promise<void> {
    if (config.id === undefined) {
      throw new Error(`Missing config id.`);
    }

    const { error } = await this._supabase
      .from('minesweeper_leaderboard_entries')
      .insert({
        name: name,
        milliseconds: Math.ceil(milliseconds),
        minesweeper_config_id: config.id,
      });

    if (error) {
      throwPostgrestError(error);
    }
  }
}

function throwPostgrestError(error: PostgrestError): never {
  throw new Error(`${error.name}: ${error.message}`);
}
