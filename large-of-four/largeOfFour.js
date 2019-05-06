function largeOfFour(fourArr) {
  return fourArr.map(arr => arr.reduce((largest, num) => {
    if (num > largest) {
      return num;
    }
    return largest;
  }, 0));
}

export { largeOfFour };
