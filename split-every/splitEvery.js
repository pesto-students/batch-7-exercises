
function splitEvery(noOfCharactersToExtract,arr) {
    let splittedArray = []
    let slicedArray = []
    if(arr.length === 0) {
      throw new Error("Expected some value but input array is null")
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
