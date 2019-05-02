import { max } from "date-fns";

function longestWordInString(stringValue) {
  var stringArray = stringValue.split(" ")
  var maxLength = 0
  for( let i=0; i < stringArray.length; i++){
      if(stringArray[i].length > maxLength){
        maxLength = stringArray[i].length
      }
  }
  return  maxLength
}

export {
  longestWordInString,
};
