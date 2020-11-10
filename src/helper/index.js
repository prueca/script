export const dedupe = (arr) => {
  const set = new Set(arr);
  return [...set];
};
