function parseNumber(n) {
  if (typeof n === "number") {
    return n;
  } else {
    let convertToNum = parseInt(n);
    console.log(convertToNum);
    if (isNaN(convertToNum)) {
      throw new Error("Input elements not in correct format");
    } else {
      return convertToNum;
    }
  }
}

function arrayCubeRootToJson(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  }
  let result = {};
  arr.map(num => {
    let number = parseNumber(num);
    result[num] = Math.cbrt(number);
  });
  return result;
}

export { arrayCubeRootToJson };
