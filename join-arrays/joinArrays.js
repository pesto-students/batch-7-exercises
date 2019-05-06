
function joinArrays(...args) {
  console.log(arguments[0])
  let joinedArray = []
  for(i = 0;i <= args.length;i++){
    joinedArray.concat(arguments[i])
  }
  return joinedArray
}

export {
  joinArrays,
};
