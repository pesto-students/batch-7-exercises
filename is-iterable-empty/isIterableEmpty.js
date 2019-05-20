function isIterableEmpty(iteratorObj) {
  let objType = typeof iteratorObj[Symbol.iterator];
  if (!objType == "function") {
    return false;
  } else {
    let iterObj = iteratorObj[Symbol.iterator]();
    return iterObj.next().done == true;
  }
}

export { isIterableEmpty };
