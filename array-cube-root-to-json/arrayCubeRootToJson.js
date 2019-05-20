
function arrayCubeRootToJson(array) {
  const isNotNumber = element => (typeof element !== 'number');
  if (array.some(isNotNumber)) {
    throw new Error('Array has elements which are not number');
  }
  return array.reduce((acc, element) => {
     acc[element] = Math.cbrt(element);
     return acc;
  }, {});
}

export {
  arrayCubeRootToJson,
};
