function getIndexToIns(array, valueToInsert) {
  const sortedArray = array.sort((element1, element2) => element1 - element2);
  let expetedIndex = sortedArray.length;
  sortedArray.some((element, index) => {
    if (element >= valueToInsert) {
      expetedIndex = index;
      return true;
    }
  });

  return expetedIndex;
}

export { getIndexToIns };
