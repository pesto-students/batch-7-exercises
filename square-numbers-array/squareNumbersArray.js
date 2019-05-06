
function squareNumbersArray(arr) {
  arr.map((element) => {
    if(typeof element !== "Number"){
      throw new Error("Input Array is not valid")
    }
    return Math.pow(element,2)
  })
}

export {
  squareNumbersArray,
};
