export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  published: Date | undefined;
  updated: Date | undefined;
  isDraft: boolean;
  tags: ReadonlyArray<string>;
  hn: string | undefined;
};
