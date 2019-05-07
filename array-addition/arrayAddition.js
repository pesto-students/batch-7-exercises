
function arrayAddition(arr1,arr2) {
  function isValid(){
    if(arr1.length === -1 || arr2.length === -1) {
      return false
    }
  }
  isValid ? "" : throw new Error("Invalid Input")
  const addedArray = arr1.map((number,index)=> {
    number + arr2[index]
  })
  return addedArray
}

export {
  arrayAddition,
};
