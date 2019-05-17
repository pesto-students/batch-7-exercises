
function mergeAll(array) {
  // console.log(array[0]);
  const mergedObject = {};
  array.map((obj) => {
    Object.assign(mergedObject, obj);
  });
  return mergedObject;
}

export {
  mergeAll,
};