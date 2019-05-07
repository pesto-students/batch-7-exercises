
function aperture(n,array) {
  if (n > array.length) {
    return [];
  } 
  let count = 0;
  const transformedArray = [];
  while (count < array.length - n + 1)  { // Not going beyond length - size of each tuple
    transformedArray.push(array.slice(count, count + n));
    count += 1;
  }
  return transformedArray;
}

export {
  aperture,
};
