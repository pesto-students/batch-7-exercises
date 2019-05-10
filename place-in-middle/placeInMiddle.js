function placeInMiddle(array, arrayToBeInserted) {
  const middleIndex = Math.floor(array.length / 2);
  array.splice(middleIndex, 0, ...arrayToBeInserted);
  return array;
}

export { placeInMiddle };
