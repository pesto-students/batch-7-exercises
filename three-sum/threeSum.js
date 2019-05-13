import { error } from "util";
import { throwError } from "rxjs";

function threeSum(numericArray, targetSum) {
  if (
    !numericArray ||
    numericArray.length < 3 ||
    typeof targetSum != "number"
  ) {
    return () => {
      throw new Error(
        `Invalid Input, Required Number, Provided ${typeof targetSum}`
      );
    };
  }
  var hashmap = {};
  for (var i = 0; i < numericArray.length; i++) {
    var element = numericArray[i];
    if (!hashmap[element]) {
      hashmap[element] = 1;
    } else {
      hashmap[element]++;
    }
  }
  //numericArray.sort();
  for (var i = 0; i < numericArray.length; i++) {
    element = numericArray[i];
    var resultTripletArray = [];
    var sum = targetSum;
    var hashmapClone = {};
    Object.assign(hashmapClone, hashmap);
    hashmapClone[element]--;
    sum -= element;
    resultTripletArray.push(element);
    for (var j = i + 1; j < numericArray.length; j++) {
      element = numericArray[j];
      if (element != 0 && hashmapClone[element] && hashmapClone[element] != 0) {
        hashmapClone[element]--;
        resultTripletArray.push(element);
        if (
          sum - element != 0 &&
          hashmapClone[sum - element] &&
          hashmapClone[sum - element] != 0
        ) {
          resultTripletArray.push(sum - element);
          return resultTripletArray;
        }
        resultTripletArray.pop();
      }
    }
  }
  return null;
}

export { threeSum };
