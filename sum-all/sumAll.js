function sumAll(arr) {
  let smallerNum = 0;
  let largerNum = 1;
  if (arr[0] > arr[1]) {
    smallerNum = 1;
    largerNum = 0;
  }
  let sum = 0;
  for (let i = arr[smallerNum]; i <= arr[largerNum]; i += 1) {
    sum += i;
  }
  return sum;
}

export { sumAll };
