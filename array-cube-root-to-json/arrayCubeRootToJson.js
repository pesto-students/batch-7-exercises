function getValidNumber(num) {
  if (typeof num === 'number') {
    return num;
  }
  if (typeof num === 'string') {
    const parsedNum = Number.parseFloat(num);
    if (isNaN(parsedNum)) {
      throw new Error(`Expected array of numbers. Received ${typeof num}`);
    }
    return parsedNum;
  }
  throw new Error(`Expected array of numbers. Received ${typeof num}`);
}

function arrayCubeRootToJson(array) {
  if (!Array.isArray(array)) {
    throw new Error(`Expected array of numbers. Received ${typeof array}!`);
  }
  const cubeRootObject = {};
  array.map((num) => {
    const parsedNum = getValidNumber(num);
    const isNumberNegative = num < 0;
    let multiplier = 1;
    if (isNumberNegative) {
      multiplier = -1;
    }
    cubeRootObject[parsedNum] = Math.round((num * multiplier) ** (1 / 3)) * multiplier;
  });
  return cubeRootObject;
}

export { arrayCubeRootToJson };
