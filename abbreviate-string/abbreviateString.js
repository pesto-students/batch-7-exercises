
function abbreviateString(stringToAbbreviate) {
  var firstSpace = stringToAbbreviate.indexOf(" ");
  var lastSpace = stringToAbbreviate.lastIndexOf(" ");
  var firstHalf = sliceString(stringToAbbreviate,0,firstSpace);
  var secondHalf = sliceString(stringToAbbreviate,lastSpace,lastSpace+2).toUpperCase();
   var abbreviatedString =  firstHalf + secondHalf + '.';
    return abbreviatedString;
  }

  function sliceString(stringToSlice,lb,up)
  {
    return stringToSlice.slice(lb,up);
  }

export {
  abbreviateString,
};
