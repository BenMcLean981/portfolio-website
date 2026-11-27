import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

// A tag is also its page's URL, /blog/tags/<tag>, so keep it URL-safe.
const TAG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const TAG_MESSAGE = 'Write tags in lowercase kebab-case, like "test-driven".';

/**
 * Blog posts are Markdown files in src/content/blog. The file name is the
 * slug, so a post lives at /blog/<file-name>.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      published: z.coerce.date().optional(),
      updated: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string().regex(TAG_PATTERN, TAG_MESSAGE)).default([]),
    })
    .refine((post) => post.draft || post.published !== undefined, {
      message: 'A post needs a published date unless it is a draft.',
      path: ['published'],
    }),
});

export const collections = { blog };
