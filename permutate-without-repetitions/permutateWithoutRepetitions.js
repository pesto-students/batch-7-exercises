function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}

function permutateWithoutRepetitions(args) {
  let newArray = [];
  let similar = [];
  const mast = [];
  similar = args;
  const factorialNumber = factorial(args.length);
  for (let i = 0; i < factorialNumber; i += 1) {
    for (let j = 0; j < similar.length; j += 1) {
      if (j === similar.length - 1) {
        newArray[0] = similar[j];
      } else {
        newArray[j + 1] = similar[j];
      }
    }
    similar = newArray;
    mast.push(newArray);
    newArray = [];
  }
  mast.unshift(mast.pop());
  return mast;
}

export {
  permutateWithoutRepetitions,
};
