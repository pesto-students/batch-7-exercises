
function union(list1, list2) {
  const union = new Set([...list1, ...list2]);
  return [...union];
}

export {
  union,
};
