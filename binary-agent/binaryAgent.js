
function binaryAgent(binaryString) {
  let binaryArr = binaryString.split(' ');
  let englishValue = '';
  binaryArr.map((binaryVal)=>{
    englishValue += String.fromCharCode(parseInt(binaryVal,2));
  });
  return englishValue;
} 

export {
  binaryAgent,
};
