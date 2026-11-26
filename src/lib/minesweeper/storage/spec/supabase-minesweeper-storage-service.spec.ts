import { type SupabaseClient } from '@supabase/supabase-js';
import { describe, expect, it } from 'vitest';
import { SupabaseMinesweeperStorageService } from '../supabase-minesweeper-storage-service';

type OrderCall = { column: string; options: { ascending: boolean } };

function makeClient(orderCalls: OrderCall[]): SupabaseClient {
  const query = {
    select: () => query,
    eq: () => query,
    order: (column: string, options: { ascending: boolean }) => {
      orderCalls.push({ column, options });
      return query;
    },
    limit: async () => ({ data: [], error: null }),
  };

  return { from: () => query } as unknown as SupabaseClient;
}

describe('SupabaseMinesweeperStorageService', () => {
  it('ranks leaderboard entries fastest first.', async () => {
    const orderCalls: OrderCall[] = [];
    const service = new SupabaseMinesweeperStorageService(
      makeClient(orderCalls)
    );

    await service.getLeaderboardEntries(
      { id: 1, name: 'Beginner', numRows: 8, numColumns: 8, numBombs: 10 },
      5
    );

    expect(orderCalls).toEqual([
      { column: 'milliseconds', options: { ascending: true } },
    ]);
  });
});
