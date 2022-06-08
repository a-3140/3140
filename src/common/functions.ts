export const dateToString = (date: Date) => {
  date.toUTCString().slice(0, -13);
};

export const sliceDateString = (string: string) => {
  return string.slice(0, 10);
};
