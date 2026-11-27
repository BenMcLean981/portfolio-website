import type { CollectionEntry } from 'astro:content';
import { type BlogPost } from '../../lib/blog/blog-post';

export function mapEntryToBlogPost(entry: CollectionEntry<'blog'>): BlogPost {
  const { data } = entry;

  return {
    slug: entry.id,
    title: data.title,
    description: data.description,
    published: data.published,
    updated: data.updated,
    isDraft: data.draft,
    tags: data.tags,
  };
}
