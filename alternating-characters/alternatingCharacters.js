
function alternatingCharacters(arr) {
  arr.map((element)=>{
        var characterArray =  element.split()
        var previousCharacter
        var charExtractionCount = 0
        characterArray.map((character)=>{
            if(character == previousCharacter){
               charExtractionCount += 1
               previousCharacter = character
            }
            return charExtractionCount
        })
  })
}

export {
  alternatingCharacters,
};
