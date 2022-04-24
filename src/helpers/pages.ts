interface PageCollections {
  title: string;
  description: string;
}

export const pageCollections: PageCollections[] = [
  {
    title: "Tech",
    description: "Recent blogs and researches regarding tech topics.",
  },
];

export const getDescriptionFromRouterTitle = (title: string | string[]) => {
  if (title.constructor === Array) {
    return "Description is not setup properly - contact developer.";
  }

  const { description } = pageCollections.filter(
    (page) => page.title === title
  )[0];

  return description;
};
