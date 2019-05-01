
function bouncer(...args) {
  let inputArray = args[0];
  let answerArray = inputArray.filter(function(element) {
    if (element != false) {
      return element;
    }
  });
  return answerArray;
}

export {
  bouncer,
};
