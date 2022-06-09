export const dateToString = (date: Date) => {
  return date.toUTCString().slice(4, -13);
};

export const rawStringToFormattedDate = (dateString: string) => {
  return dateToString(new Date(dateString));
};

export const sliceDateString = (string: string) => {
  return string.slice(0, 10);
};
