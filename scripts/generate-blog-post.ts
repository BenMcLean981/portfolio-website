// Creates a draft post from blog-post-template.md.
// Usage: yarn blog:generate "The role of programmers in the age of AI"
import { readFile, writeFile } from 'node:fs/promises';
import { getPostFileName } from '../src/lib/blog/post-file-name.ts';
import { renderPostTemplate } from '../src/lib/blog/render-post-template.ts';

const TEMPLATE = new URL('./blog-post-template.md', import.meta.url);
const POSTS_DIRECTORY = 'src/content/blog';

const title = process.argv.slice(2).join(' ').trim();

if (title === '') {
  exitWithError('Give the post a title: yarn blog:generate "Post title"');
}

const path = `${POSTS_DIRECTORY}/${getPostFileName(title, new Date())}`;
const template = await readFile(TEMPLATE, 'utf8');

try {
  await writeFile(path, renderPostTemplate(template, title), { flag: 'wx' });
} catch (error) {
  if (isFileExistsError(error)) {
    exitWithError(`${path} already exists.`);
  }

  throw error;
}

console.log(`Created ${path}`);

function exitWithError(message: string): never {
  console.error(message);
  process.exit(1);
}

function isFileExistsError(error: unknown): boolean {
  return error instanceof Error && 'code' in error && error.code === 'EEXIST';
}
