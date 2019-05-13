
function counter(...args) {
  let counter = 0;
  
  let increment = () => counter += 1;
  return increment;
}
    

export {
  counter,
};
