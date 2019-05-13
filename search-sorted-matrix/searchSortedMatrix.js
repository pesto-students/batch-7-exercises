import { notDeepEqual } from "assert";

function searchSortedMatrix(...args) {
  const noToSearch = args[0].search
  const searchMatrix = args[0].matrix
  const maxRow = searchMatrix.length
  const maxColumn  = searchMatrix[0].length
  let row = 0
  let col = maxColumn - 1
  if(noToSearch < searchMatrix[0][0] || noToSearch > searchMatrix[maxRow-1][maxColumn-1]) {
    return false
  }
  while(row >= 0 && col >= 0) {
    if(searchMatrix[row][col] < noToSearch) {
      row ++
    } else if(searchMatrix[row][col] > noToSearch) {
      col--
    } else {
      return true
    }
  }
  return false
}

export {
  searchSortedMatrix,
};
