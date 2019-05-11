
function diffArray(array1,array2) {
  var filteredArray = []
  array1.map((element)=>{
      array2.indexOf(element) < 0 ? filteredArray.push(element) : ""
  })
  array2.map((element)=>{
    array1.indexOf(element) < 0 ? filteredArray.push(element) : ""
  })
  return filteredArray
}

export {
  diffArray,
};
