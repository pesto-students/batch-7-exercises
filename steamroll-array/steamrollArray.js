function steamrollArray(nestedArray) {
  var array = [];
  visitEachElement(nestedArray, array);
  return array;
}

function visitEachElement(array, resultArray) {
  array.map(element => {
    if (Array.isArray(element) && element.length) {
      visitEachElement(element, resultArray);
    } else if (!Array.isArray(element)) {
      resultArray.push(element);
    }
  });
}

export { steamrollArray };
