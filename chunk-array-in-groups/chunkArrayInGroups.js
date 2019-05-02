function chunkArrayInGroups(array, splitIn) {
  const chunks = [];
  for (let i = 0; i < array.length; i += splitIn) {
    chunks.push(array.slice(i, i + splitIn));
  }
  return chunks;
}

export { chunkArrayInGroups };
