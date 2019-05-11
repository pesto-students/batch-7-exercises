
function objectAssign(...array) {
  let finalObject = {};
  for ( let i = 0; i < array.length; i++) {
    finalObject = Object.assign(finalObject, array[i]);
  }
  return (finalObject);
}

export {
  objectAssign,
};
