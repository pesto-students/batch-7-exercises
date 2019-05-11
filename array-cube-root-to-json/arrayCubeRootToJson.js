

function isValid(arr) {
  if (Array.isArray(arr)) {
    if (arr.every((el)=> {
      let type = parseInt(el);
      return (type === 'number' || type === Infinity);
      })
    )
    return arr;
  } else {
    return false;
  }
}

function arrayCubeRootToJson(arr) {
  if (isValid(arr)) {
    let cubeRootObject = {};
    for (let element in arr) {
      cubeRootObject[element] = Math.cbrt(element);
    }
    return cubeRootObject;
  }
  else {
    throw new Error('Unconvertable values');
  }
}

export {
  arrayCubeRootToJson,
};
