
function values(obj) {
  const map = new Map(Object.entries(obj));
  return [...map.values()];
}

export {
  values,
};
