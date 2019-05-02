var count = 0;
function counterFactory() { 
  count = 0;
  return {
    increment(){
      return ++count;
    },
    decrement(){
      return --count;
    }
  };
}

export {
  counterFactory,
};
