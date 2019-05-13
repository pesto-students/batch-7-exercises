
function diffArray(...args) {
  let firstArray = args[0];
  let secondArray = args[1];
  let arrayWithUniqueElementsinSecondArray = secondArray.filter(function(element) {
    return firstArray.indexOf(element) == -1;
  })
  let arrayWithUniqueElementsinFirstArray = firstArray.filter(function(element) {
    return secondArray.indexOf(element) == -1;
  });

  return arrayWithUniqueElementsinFirstArray.concat(arrayWithUniqueElementsinSecondArray);
}

export {
  diffArray,
};
