
function uniq(...args) {
  let tempArray = []
  let uniqueCounter = 0
  args.map((element)=> {
    console.log(element)
     if(tempArray.indexOf(element) === -1) {
       console.log("element not present")
      uniqueCounter ++
     }
     tempArray.push(element)
     console.log(tempArray)
     return uniqueCounter
  })
  return uniqueCounter
}

export {
  uniq,
};
