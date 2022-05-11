export enum HeaderTitles {
  Tech = "Tech",
  Portfolio = "Portfolio",
  Experience = "Experience",
}

export enum RouteNames {
  Portfolios = "Portfolios",
  Experiences = "Experiences",
  TechArticles = "TechArticles",
}

export interface RoutePair {
  name: CollectionNames;
  routeName: RouteNames;
}
