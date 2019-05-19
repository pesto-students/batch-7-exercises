
function union(list1, list2) {
  const union = new Set([...list1, ...list2]);
  if (list1.includes(-0) && list2.includes(0) || list2.includes(-0) && list1.includes(0)){
    union.push(-0);
  }
  return [...union];
}

export {
  union,
};
