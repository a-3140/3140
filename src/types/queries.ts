export type Id = string;
export type Collection = string;

export interface FetchByIdParams {
  id: Id;
  collection: Collection;
}

export interface FetchCollectionParams {
  collection: Collection;
}

export interface BaseArticle {
  id: Id;
  img: string;
  title: string;
  lastEdited: any;
  content: string;
  category: string;
  description: string;
}

export type ArticleSummary = Pick<
  BaseArticle,
  "id" | "lastEdited" | "title" | "description"
>;

export type PortfolioSummary = Pick<
  BaseArticle,
  "id" | "title" | "description"
> & {
  link?: string;
  github?: string;
};
