
function limitFunctionCallCount(callBack,callBackLimit) {
  return function(...args){
    if(callBackLimit<=0){
      return null
    }
    else{
      callBackLimit--;
      return callBack(...args);
    }
  }
}

export {
  limitFunctionCallCount,
};
