
function addBigIntegers(addString) {
  var splittedStringArray = addString.split()
  var nosToAdd = splittedStringArray.indexof[0] 
  var sum = 0
  splittedStringArray = splittedStringArray.filter((element)=>{
    splittedStringArray.indexof(element) > 0 < nosToAdd
  })
  splittedStringArray.map((element)=>{
     return sum += element
  })
}

export {
  addBigIntegers,
};
