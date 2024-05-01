export const convertCamelCaseToSpace = (str: string) => {
  const res = str
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .trim();
  return res.charAt(0).toUpperCase() + res.slice(1);
};
