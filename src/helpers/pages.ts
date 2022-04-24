export const pages = [
  {
    title: "Blog",
    description: "Recent blogs and researches regarding tech topics.",
  },
];

export const getDescriptionFromRouterTitle = (title: string | string[]) => {
  const { description } = pages.filter((page) => page.title === title)[0];
  return description;
};
