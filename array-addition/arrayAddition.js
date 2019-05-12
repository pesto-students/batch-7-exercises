
function arrayAddition(arr1,arr2) {
  function isValid(){
    if(arr1.length === 0 || arr2.length === 0 || typeof arr1 || typeof arr2 !== "object") {
      return false
    }
    else {
      throw new Error("Invalid Input")
    }
  }

  const addedArray = arr1.map((number,index)=> {
    number + arr2[index]
  })
  return addedArray
}

export {
  arrayAddition,
};
