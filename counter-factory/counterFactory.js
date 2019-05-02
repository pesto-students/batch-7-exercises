
function counterFactory() {
  let count =0;
  return  {
    increment : () => (++count),
    decrement : () => (--count)
  };
}

export {
  counterFactory,
};
