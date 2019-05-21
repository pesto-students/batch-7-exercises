function chunkArrayInGroups(array, number) {
  const outputArray = [];
  let index = 0;
  for (let i = 0; i < array.length; i += number) {
    outputArray[index] = array.slice(i, i + number);
    index += 1;
  }
  return outputArray;
}

export { chunkArrayInGroups };
