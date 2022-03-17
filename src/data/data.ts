interface Blog {
  id: string;
  title: string;
  dateCreated: Date;
  description: string;
}

export const data: Blog[] = [
  {
    id: "001",
    title: "When to use and not to use lazy loading",
    dateCreated: new Date("March 14, 2022"),
    description:
      "We should start with the question: What is lazy loading? Then, how does it work? How do we use it for optimization?",
  },
  {
    id: "002",
    title: "What is Critical Render Path",
    dateCreated: new Date("March 17, 2022"),
    description:
      "We should start with the question: What is lazy loading? Then, how does it work? How do we use it for optimization?",
  },
];
