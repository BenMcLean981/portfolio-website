# portfolio-website

Source for [ben-mclean-software.com](https://www.ben-mclean-software.com). It's an [Astro](https://astro.build) site with React islands, hosted on [Cloudflare Pages](https://pages.cloudflare.com).

## Development

```bash
yarn install
yarn dev          # dev server at http://localhost:4321
yarn test         # vitest
yarn lint         # eslint
yarn build        # static output in dist/
yarn preview      # build, then serve dist/ with Cloudflare's local Pages runtime
```

Node version is pinned in `.node-version`. CI and Cloudflare both read it.

### Environment variables

The Minesweeper leaderboard reads from Supabase in the browser. The values are inlined into the client bundle at build time, so put only public values here.

| Variable                   | Value                      |
| -------------------------- | -------------------------- |
| `PUBLIC_SUPABASE_URL`      | Supabase project URL       |
| `PUBLIC_SUPABASE_ANON_KEY` | Supabase anon (public) key |

For local builds, put them in `.env`, which git ignores.

## How it's put together

- `src/pages/`: routes. Each `.astro` file is a thin template that renders one React component from `src/components/pages/`.
- `src/layouts/base-layout.astro`: `<head>`, nav and page container.
- Pages are static HTML. Components marked `client:load` hydrate in the browser as islands. Anything live, like the leaderboard or the age on the homepage, is computed in the browser so a prerendered page never goes stale.
- Logic lives in plain TypeScript (`src/lib/`) and is unit tested. `.astro` files stay thin.

## Deployment (Cloudflare Pages)

Every push to `main` deploys to production. Every other branch gets a preview URL on `*.pages.dev`, which `public/_headers` marks `noindex`.

### One-time setup

1. **Create the project:** Cloudflare dashboard → Workers & Pages → Create → Pages → connect this GitHub repo.
   - Production branch: `main`
   - Framework preset: Astro
   - Build command: `yarn build`
   - Build output directory: `dist`
2. **Environment variables:** add `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` for both Production and Preview.
3. **Analytics:** in the Pages project, open Metrics and enable Web Analytics. Cloudflare injects the script, so no code is needed.
4. **Custom domain:** in the Pages project, open Custom domains and add `ben-mclean-software.com` and `www.ben-mclean-software.com`. Cloudflare walks you through the DNS records.
5. **Shut down Vercel:** once the Cloudflare deployment serves the custom domain, disconnect the repo from Vercel and delete the Vercel project.
