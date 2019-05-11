function placeInMiddle(initialArray, arrayTobeInserted) {
  const midlle = Math.floor(initialArray.length / 2);
  initialArray.splice(midlle, 0, ...arrayTobeInserted);
  return initialArray;
}


export { placeInMiddle };
