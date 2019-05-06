
function alternatingCharacters(arr) {
  arr.map((element)=> {
        var characterArray =  element.split("")
        var charExtractionCount = 0
        for(let i =0; i <= characterArray.length - 1; i++) {
          if(characterArray[i] === characterArray[i + 1]) {
            charExtractionCount += 1
          }  
        }
        return charExtractionCount
        
        
  })
}
export {
  alternatingCharacters,
};
