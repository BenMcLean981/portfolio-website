import { getEntry, render } from 'astro:content';

/** Renders a post's Markdown body to an Astro component. */
export async function renderBlogPost(slug: string) {
  const entry = await getEntry('blog', slug);

  if (entry === undefined) {
    throw new Error(`No blog post has the slug "${slug}".`);
  }

  const { Content } = await render(entry);

  return Content;
}
