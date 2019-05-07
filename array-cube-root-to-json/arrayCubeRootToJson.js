
function arrayCubeRootToJson(arr) {
  const cubeRootObject = arr.map((number)=> {
     cubeRootObject.number = Math.cbrt(number)
  })
  return cubeRootObject
}

export {
  arrayCubeRootToJson,
};
