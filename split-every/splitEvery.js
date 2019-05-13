
function splitEvery(noOfCharactersToExtract,arr) {
    let splittedArray = []
    let slicedArray = []
    if(noOfCharactersToExtract <= 0) {
      throw new Error("number is 0 or negative")
    }
    for(let i = 0; i < arr.length;i = i + (noOfCharactersToExtract)) {
      
       slicedArray = arr.slice(i,noOfCharactersToExtract + i)
       splittedArray.push(slicedArray)
    }
    return splittedArray
}

export {
  splitEvery,
};
