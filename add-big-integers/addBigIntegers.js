
function addBigIntegers(addString) {
  var splittedStringArray = addString.split("\n")
  var nosToAdd = splittedStringArray.shift()
  var sum = 0
  splittedStringArray.map((element)=> {
     element = Number(element)
     sum = (sum + element)  
     return sum.toPrecision()
     
  })
  return sum.toString()
}

export {
  addBigIntegers,
};
