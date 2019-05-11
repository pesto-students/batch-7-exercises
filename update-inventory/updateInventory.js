const getCounts = item => item[0];
const getName = item => item[1];

const compareAlphabetically = (item1, item2) => getName(item1).localeCompare(getName(item2));

function updateInventory(currentInventory, newInventory) {
  const finalInventory = currentInventory.reduce((acc, item) => {
    const newItemIndex = newInventory.findIndex(newItem => getName(newItem) === getName(item));
    if (newItemIndex === -1) {
      acc.push(item);
    } else {
      const prevItem = acc[newItemIndex];
      const totalItemCount = getCounts(prevItem) + getCounts(item);
      acc[newItemIndex] = [totalItemCount, getName(item)];
    }
    return acc;
  }, newInventory);

  return finalInventory.sort(compareAlphabetically);
}

export { updateInventory };
