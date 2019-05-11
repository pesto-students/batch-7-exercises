
function binaryAgent(binaryString) {
  var splittedString = binaryString.split(" ")
  var text = ''
  splittedString.map((element)=>{
    text += String.fromCharCode(parseInt(element,2))
  })
  return text
  }

export {
  binaryAgent,
};
