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
  date?: string;
  content: string;
  lastEdited?: any;
  category: string;
  description: string;
}

export type ArticleSummary = Pick<
  BaseArticle,
  "id" | "lastEdited" | "date" | "title" | "description"
>;

export type ExperienceSummary = Pick<
  BaseArticle,
  "id" | "date" | "title" | "description"
>;

export type PortfolioSummary = Pick<BaseArticle, "title" | "description"> & {
  link?: string;
  github?: string;
};
