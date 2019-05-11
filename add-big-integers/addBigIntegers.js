
function addBigIntegers(addString) {
  var splittedStringArray = addString.split("\n")
  var nosToAdd = splittedStringArray.shift()
  var sum = 0
  splittedStringArray.map((element)=> {
     element = Number(element)
     return sum += element   
  })
  return sum.toFixed()
}

export {
  addBigIntegers,
};
