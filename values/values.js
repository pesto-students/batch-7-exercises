function values(object) {
  const map = new Map(Object.entries(object));
  return [...map.values()];
}

export { values };
