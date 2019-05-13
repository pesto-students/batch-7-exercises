function getIndexToIns(arr, numToInsert) {
  arr.push(numToInsert);
  arr.sort((firstEl, secondEl) => firstEl - secondEl);
  return arr.indexOf(numToInsert);
}

export { getIndexToIns };
