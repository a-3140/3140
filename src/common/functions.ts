export const dateToString = (date: Date) => {
  date.toUTCString().slice(0, -13);
};
