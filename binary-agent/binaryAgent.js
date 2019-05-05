
function binaryAgent(str) {
  var arr = [];
  //seperate array elems between spaces
  str = str.split(' ').map(Number);
  
   str = str.map( function( num ){ return (parseInt(num, 2));});
  //convert binary string into English!
  str.forEach(function(code){
    arr.push(String.fromCharCode(code));
  });
   return (arr.join(''));
}

export {
  binaryAgent,
};
//binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');