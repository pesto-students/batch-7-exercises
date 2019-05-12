
function arrayCubeRootToJson(arr) {
  let cubeRootObject = {}
  
  arr.map((number)=> {
    if(typeof number !== "number"){
      throw new Error("INvalid Input")
    }
     let cubeRootValue = Math.cbrt(number)
     cubeRootObject[number.toString()] = cubeRootValue
  })
  return cubeRootObject
}

export {
  arrayCubeRootToJson,
};
