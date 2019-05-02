function bouncer(array) {
  var nonFalsyValueArray = array.filter(element => {
    var isNumber = element => {
      return typeof element == "number";
    };
    var isString = element => {
      return typeof element == "string";
    };
    var isObject = element => {
      return typeof element == "object";
    };
    if (
      (isNumber(element) || isString(element) || isObject(element)) &&
      element
    ) {
      return element;
    }
  });
  return nonFalsyValueArray;
}

export { bouncer };
