
function joinArrays(...args) {
  let joinedArray = []
  joinedArray.concat(...args)
  return joinedArray
}

export {
  joinArrays,
};
