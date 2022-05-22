export enum HeaderTitles {
  Blog = "Blog",
  Portfolio = "Portfolio",
  Experience = "Experience",
}

export enum RouteNames {
  Blogs = "Blogs",
  Portfolios = "Portfolios",
  Experiences = "Experiences",
}

export interface RoutePair {
  name: CollectionNames;
  routeName: RouteNames;
}
