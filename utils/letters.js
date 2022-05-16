export const firtsLetterUpper = (string) => {
  if (!string) return null;
  const f = string.at(0).toUpperCase();
  const n = `${f}${string.slice(1)}`;
  return n;
};
