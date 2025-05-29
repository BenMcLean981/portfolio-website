import { createClient } from '@supabase/supabase-js';
import { type MinesweeperStorageService } from './minesweeper-storage-service';
import { SupabaseMinesweeperStorageService } from './supabase-minesweeper-storage-service';

export const MINESWEEPER_STORAGE_SERVICE = makeMinesweeperStorageService();

function makeMinesweeperStorageService(): MinesweeperStorageService {
  const SUPABASE_URL = getVariable(process.env['SUPABASE_URL']);
  const SUPABASE_ANON_KEY = getVariable(process.env['SUPABASE_ANON_KEY']);

  const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  return new SupabaseMinesweeperStorageService(client);
}

function getVariable(value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing variable`);
  }

  return value;
}
