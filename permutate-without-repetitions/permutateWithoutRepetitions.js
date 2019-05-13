//[WIP]:
function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i += 1) {
    result *= i;
  }

  return result;
}

function permutateWithoutRepetitions(arr) {
  let length = factorial(arr.length);
}

// export {
//   permutateWithoutRepetitions,
// };

const permutations1 = permutateWithoutRepetitions(['A', 'B']);
