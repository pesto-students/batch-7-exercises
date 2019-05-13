import { error } from "util";

function abbreviateString(str) {
  if(typeof(str) === 'string'){
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