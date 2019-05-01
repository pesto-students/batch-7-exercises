
function binaryAgent(...args) {
  var binaryString=args[0];
  var binaryStringArray=binaryString.split(' ');
  var englishString=[];
  for(let i=0;i<binaryStringArray.length;i++){
  	englishString.push(String.fromCharCode(parseInt(binaryStringArray[i],2)));
  }

  return englishString.join("");
}

export {
  binaryAgent,
};
