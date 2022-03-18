export function dateToString(date: Date) {
  return date.toUTCString().slice(0, -13);
}
