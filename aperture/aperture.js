
function aperture(noOfCharactersToExtract, arr) {
  let array = []
  let slicedArray = []
  alert(arr.length)
  alert(noOfCharactersToExtract)
  for(let i = 0; i < arr.length;i = i + (noOfCharactersToExtract)) {
     slicedArray = arr.slice(i,noOfCharactersToExtract + i)
     console.log(arr)
     console.log(slicedArray)
    array.push(slicedArray)
   // console.log(array)
  }
  return array
}

export {
  aperture,
};
