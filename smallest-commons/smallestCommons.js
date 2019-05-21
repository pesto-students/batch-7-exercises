/**
 * Converts to memoize function
 * if function contains recursion
 *  then it requires to reinitialized with returned memoized function
 * @param {Function} [func] The function to be memoize
 * @returns {Function} Returns memoized Function
 */
function memoizer(func) {
  const cache = {};
  return (...args) => {
    const index = args.toString();
    if (cache[index] === undefined) {
      cache[index] = func(...args);
    }
    return cache[index];
  };
}

let GCD = (num1, num2) => (num2 === 0 ? num1 : GCD(num2, num1 % num2));
GCD = memoizer(GCD);

let LCM = (num1, num2) => (num1 * num2) / GCD(num1, num2);
LCM = memoizer(LCM);

function smallestCommons(range) {
  let [lowerBound, upperBound] = range;
  if (lowerBound > upperBound) {
    [lowerBound, upperBound] = [upperBound, lowerBound];
  }
  let smallestCommon = lowerBound;
  for (let i = upperBound; i >= lowerBound; i -= 1) {
    smallestCommon = LCM(smallestCommon, i);
  }
  return smallestCommon;
}

export { smallestCommons };
