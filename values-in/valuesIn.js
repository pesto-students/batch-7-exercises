
function valuesIn(obj) {
  const objectArray = [];
  for (const key in obj) {
    objectArray.push(obj[key]);
  }
  return objectArray;
}

export {
  valuesIn,
};
