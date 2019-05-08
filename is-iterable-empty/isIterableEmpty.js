
function isIterableEmpty(iteratorObj) { 
  return iteratorObj.next().done;
}

export {
  isIterableEmpty,
};
