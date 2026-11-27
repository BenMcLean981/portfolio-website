import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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
      tags: z.array(z.string()).default([]),
    })
    .refine((post) => post.draft || post.published !== undefined, {
      message: 'A post needs a published date unless it is a draft.',
      path: ['published'],
    }),
});

export const collections = { blog };
