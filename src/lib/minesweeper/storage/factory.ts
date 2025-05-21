import { createClient } from '@supabase/supabase-js';
import { type MinesweeperStorageService } from './minesweeper-storage-service';
import { SupabaseMinesweeperStorageService } from './supabase-minesweeper-storage-service';

export function makeMinesweeperStorageService(): MinesweeperStorageService {
  const SUPABASE_URL = getVariable('NEXT_PUBLIC_SUPABASE_URL');
  const SUPABASE_ANON_KEY = getVariable('NEXT_PUBLIC_SUPABASE_ANON_KEY');

  const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  return new SupabaseMinesweeperStorageService(client);
}

function getVariable(key: string) {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing ${key}`);
  }

  return value;
}
