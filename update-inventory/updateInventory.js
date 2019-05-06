function updateInventory(currentInventory, newInventory) {
  const newItemsToAdd = [];
  newInventory.forEach((item) => {
    const elementIndex = currentInventory.findIndex(currItem => currItem[1] === item[1]);
    if (elementIndex < 0) {
      newItemsToAdd.push(item);
    } else {
      currentInventory[elementIndex][0] += item[0];
    }
  });
  const updatedInventory = currentInventory.concat(newItemsToAdd);
  return updatedInventory.sort((item1, item2) => {
    if (item1[1] < item2[1]) {
      return -1;
    }
    if (item1[1] > item2[1]) {
      return 1;
    }
    return 0;
  });
}

export { updateInventory };
