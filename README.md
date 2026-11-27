# portfolio-website

Source for [ben-mclean-software.com](https://www.ben-mclean-software.com). It's an [Astro](https://astro.build) site with React islands, hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/).

## Development

```bash
yarn install
yarn dev          # dev server at http://localhost:4321
yarn test         # vitest
yarn lint         # oxlint
yarn build        # static output in dist/
yarn preview      # build, then serve dist/ with Cloudflare's local Workers runtime
```

Node version is pinned in `.node-version`. CI and Cloudflare both read it.

### Environment variables

The Minesweeper leaderboard reads from Supabase in the browser. The values are inlined into the client bundle at build time, so put only public values here.

| Variable                   | Value                      |
| -------------------------- | -------------------------- |
| `PUBLIC_SUPABASE_URL`      | Supabase project URL       |
| `PUBLIC_SUPABASE_ANON_KEY` | Supabase anon (public) key |

For local builds, put them in `.env`, which git ignores.

### Local development settings

`yarn dev` also reads `.env.development`, which git ignores. Create yours from the committed template:

```bash
cp .env.development.default .env.development
```

| Variable      | Value                                                                |
| ------------- | -------------------------------------------------------------------- |
| `SHOW_DRAFTS` | `true` to show draft blog posts in `yarn dev`. Builds never read it. |

On Cloudflare, preview deployments show drafts and production never does.

## Writing a post

Add `src/content/blog/<slug>.md`. The file name is the URL, `/blog/<slug>`.

```md
---
title: On craftsmanship
description: One sentence for the blog index, search results and link previews.
draft: true
tags: [craft, test-driven]
---
```

- **Drafts** show under `yarn dev` (with `.env.development`) and on branch previews, never in production.
- **Publishing:** remove `draft: true` and add `published: 2026-12-01`. Add `updated:` when you revise a post. A non-draft post without `published` fails the build.
- **Tags** are lowercase kebab-case, because each one is also a page at `/blog/tags/<tag>`.
- **Figures** use pandoc-crossref syntax. The bracket text is the caption, and references become links that read "Figure 1". A reference to a missing label fails the build.

  ```md
  ![The build pipeline](/images/pipeline.png){#fig:pipeline}

  As @fig:pipeline shows, ...
  ```

  Put images in `public/images`.

## How it's put together

- `src/pages/`: routes. Each `.astro` file is a thin template that renders one React component from `src/components/pages/`.
- `src/layouts/base-layout.astro`: `<head>`, nav and page container.
- Pages are static HTML. Components marked `client:load` hydrate in the browser as islands. Anything live, like the leaderboard or the age on the homepage, is computed in the browser so a prerendered page never goes stale.
- Logic lives in plain TypeScript (`src/lib/`) and is unit tested. `.astro` files stay thin.

## Deployment (Cloudflare Workers)

The site is served as [Workers static assets](https://developers.cloudflare.com/workers/static-assets/), configured in `wrangler.jsonc`. There is no Worker script. Workers Builds deploys every push to `main` to production, and every other branch gets a preview URL on `*.workers.dev`. `public/_headers` marks all `workers.dev` URLs `noindex`.

### One-time setup

1. **Create the Worker:** Cloudflare dashboard → Workers & Pages → Create → Import a repository → this GitHub repo.
   - Project name: `portfolio-website`. It must match `name` in `wrangler.jsonc`, or the build fails.
   - Production branch: `main`
   - Build command: `yarn build`
   - Deploy command: `npx wrangler deploy`
2. **Build variables:** in the Worker, open Settings → Builds → Variables and secrets, and add `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY`. They are read when the site is built, so they go under Builds, not the runtime Variables.
3. **Custom domain:** in the Worker, open Settings → Domains & Routes → Add → Custom domain, and add `ben-mclean-software.com` and `www.ben-mclean-software.com`. Workers custom domains need the domain's DNS on Cloudflare, so move the nameservers to Cloudflare first if they aren't already.
4. **Analytics:** open Analytics & Logs → Web Analytics → Add a site, and pick the domain. Because Cloudflare proxies it, the script is injected automatically, so no code is needed.
5. **Shut down Vercel:** once the Worker serves the custom domain, disconnect the repo from Vercel and delete the Vercel project.
