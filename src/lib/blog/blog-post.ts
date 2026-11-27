export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  published: Date | undefined;
  updated: Date | undefined;
  draft: boolean;
  tags: ReadonlyArray<string>;
  hn: string | undefined;
};
