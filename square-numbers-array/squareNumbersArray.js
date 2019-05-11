
function squareNumbersArray(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("My custom error")
    }
  
  return arr.map((element) => {
    if(typeof element !== "Number"){
      throw new Error("My custom error")
    }
    return Math.pow(element,2)
  })

}
export {
  squareNumbersArray,
};
