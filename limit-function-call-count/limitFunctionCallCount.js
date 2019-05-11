
function limitFunctionCallCount(callBackFunction, limitCount) {
  return (...args) => {
    if(limitCount <= 0) {
      return null
    } 
    else {
      limitCount -= limitCount
      return callBackFunction(...args)
    }
  }
}

export {
  limitFunctionCallCount,
};
