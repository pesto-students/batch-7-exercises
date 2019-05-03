import { error } from "util";

function isAString(string){
  return (typeof(string) === 'string');
}
function abbreviateString(str) {
  if(isAString(str)){
    str = str.split(" ");
    var firstWord = str[0];
    var lastWord = str[str.length -1];
    var abbreviatedString = firstWord + " "+lastWord.charAt(0).toUpperCase() + ".";
   return (abbreviatedString);
  }
  else{
    throw error();
  }
}

export {
  abbreviateString,
};
//abbreviateString(123);