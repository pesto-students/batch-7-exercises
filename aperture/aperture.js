
function aperture(size, array) {
  if (size > array.length) {
    return [];
  }
  let i;
  const finalArray = [];
  for ( i = 0;i < (array.length - size); i++) {
    const subArray = array.slice(i, i + size);
    finalArray.push(subArray);
  }
  const subArray = array.slice(i, i + size);
  console.log (finalArray);
}

// export {
//   aperture,
// };
const sevenLs = [1, 2, 3, 4, 5, 6, 7];
aperture(2, sevenLs);