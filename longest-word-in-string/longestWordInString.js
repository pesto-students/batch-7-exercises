
function longestWordInString(string) {
  var stringSplit=string.split(' ');
  var lengthOfString=[];
  for(let i=0;i<stringSplit.length;i++){
  	lengthOfString.push(stringSplit[i].length)
  }
  lengthOfString.sort(function(a, b) {
    return a - b;
  });
  return lengthOfString[lengthOfString.length-1];
}

export {
  longestWordInString,
};
