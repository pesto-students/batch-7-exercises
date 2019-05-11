
function abbreviateString(stringToAbbreviate) {
  var stringArray  =  stringToAbbreviate.split(" ");
  var abbreviatedString = stringArray[0]+" "+stringArray[stringArray.length-1].substr(0, 1).toUpperCase();
  return abbreviatedString + ".";
  } 

export {
  abbreviateString,
};
