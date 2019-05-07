
function arrayCubeRootToJson(arr) {
  const cubeRootObject = arr.map((number)=> {
     cubeRootObject.number = Math.pow(number,(1/3))
  })
  return cubeRootObject
}

export {
  arrayCubeRootToJson,
};
