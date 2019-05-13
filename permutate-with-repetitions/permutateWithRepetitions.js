var resArray = [];

function recursivePermutate(charArray, permutation) {
  if (charArray.length === permutation.length) {
    return resArray.push(permutation);
  }
  var permutationCopy = permutation.slice();
  for (var i = 0; i < charArray.length; i++) {
    permutationCopy.push(charArray[i]);
    recursivePermutate(charArray, permutationCopy);
    permutationCopy = permutation.slice();
  }
}

function permutateWithRepetitions(charArray) {
  resArray = [];
  recursivePermutate(charArray, []);
  return resArray;
}

export { permutateWithRepetitions };
