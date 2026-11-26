import type { APIRoute } from 'astro';
import { readBuildInfo } from '../lib/build-info/build-info';

// Prerendered at build time, so this reports the commit that was built.
export const GET: APIRoute = () =>
  new Response(JSON.stringify(readBuildInfo(process.env)), {
    headers: { 'Content-Type': 'application/json' },
  });
