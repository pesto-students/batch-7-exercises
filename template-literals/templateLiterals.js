
function templateLiterals() {
  let playersArray =["Rooney","Ronaldo","Messi","Pogba"]
  return `There are ${playersArray.length} people on the football team. Their names are ${playersArray[0]}, ${playersArray[1]}, ${playersArray[2]}, ${playersArray[3]}.`
}

export {
  templateLiterals,
};
