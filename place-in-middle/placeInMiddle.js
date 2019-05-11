
function placeInMiddle(array, arrayToBePlaced) {
  const middlePosition = Math.floor(array.length / 2);
  array.splice (middlePosition, 0, ...arrayToBePlaced);
  return array;
}

export {
  placeInMiddle,
};
