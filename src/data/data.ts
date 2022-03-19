interface Blog {
  id: string;
  title: string;
  dateCreated: Date;
  description: string;
  content: string;
}

export const data: Blog[] = [
  {
    id: "001",
    title: "When to use and not to use lazy loading",
    dateCreated: new Date("March 14, 2022"),
    description:
      "We should start with the question: What is lazy loading? Then, how does it work? How do we use it for optimization?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
];
