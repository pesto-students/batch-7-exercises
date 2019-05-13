
function counterFactory(...args) {
  let counter = 0;
  //console.log(counter);
  let increment = () => counter += 1;
  let decrement = () => counter -= 1;
  let resObj = {increment , decrement};
  return resObj;
}

export {
  counterFactory,
};
