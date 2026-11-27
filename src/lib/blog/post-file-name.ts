import slugify from '@sindresorhus/slugify';

export function getPostFileName(title: string, created: Date): string {
  return `${formatLocalDate(created)}-${slugify(title)}.md`;
}

export function getPostSlug(fileName: string): string {
  return fileName.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
}

function formatLocalDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
