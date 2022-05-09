export const getKeyByValue = (object: any, value: string) =>
  Object.keys(object).find((key) => object[key] === value);
