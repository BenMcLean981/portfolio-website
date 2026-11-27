export type PageMetadata = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  article?: ArticleDates;
};

export type ArticleDates = {
  published: Date;
  updated?: Date;
};

export type MetaTag =
  | { name: string; content: string }
  | { property: string; content: string };

export function listMetaTags(page: PageMetadata): ReadonlyArray<MetaTag> {
  return [
    { name: 'description', content: page.description },
    ...listOpenGraphTags(page),
    { name: 'twitter:card', content: 'summary' },
  ];
}

const SITE_NAME = 'Ben McLean';

function listOpenGraphTags(page: PageMetadata): ReadonlyArray<MetaTag> {
  return [
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:type', content: page.article ? 'article' : 'website' },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:url', content: page.url },
    { property: 'og:image', content: page.imageUrl },
    ...(page.article ? listArticleTags(page.article) : []),
  ];
}

function listArticleTags(article: ArticleDates): ReadonlyArray<MetaTag> {
  return [
    {
      property: 'article:published_time',
      content: article.published.toISOString(),
    },
    ...(article.updated
      ? [
          {
            property: 'article:modified_time',
            content: article.updated.toISOString(),
          },
        ]
      : []),
  ];
}
