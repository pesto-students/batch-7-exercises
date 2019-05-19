
function uniq(list) {
  const uniqElements = [...new Set([...list])];
  if (list.includes(-0) && list.includes(0)) {
    uniqElements.push(-0);
  }
  return [...uniqElements];
}

export {
  uniq,
};
