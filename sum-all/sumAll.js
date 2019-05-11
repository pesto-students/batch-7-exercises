
function sumAll(arr) {
  var firstElement = arr[0]
  var secondElement = arr[1]
  var sum = 0
  if (firstElement < secondElement) {
    for (let i = firstElement ; i <= secondElement; i++) {
        sum += i
    }
    return sum
  } else {
    for (let i = firstElement ; i >= secondElement; i--) {
      sum += i
  }
  return sum
  }
}

export {
  sumAll,
};
