
function binaryAgent(binaryString) {
  var sentence ="";
  var binaryArray = binaryString.split(' ');
  binaryArray.forEach(binary => {
    sentence += convertBinaryToChar(binary);
  });
  return sentence;
}

function convertBinaryToChar(binary) {
  var asciiValue = 0;
  for(var i = binary.length-1, j =0; i>=0; i--, j++){
    asciiValue += parseInt(binary[i]) * Math.pow(2,j);
  }
  return String.fromCharCode(asciiValue);
}

export {
  binaryAgent,
};
