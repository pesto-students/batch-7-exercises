function alternatingCharacters(strArr) {
  return strArr.map((str) => {
    let count = 0;
    for (let i = 0; i < str.length - 1; i += 1) {
      if (str.charAt(i) === str.charAt(i + 1)) {
        count += 1;
      }
    }
    return count;
  });
}

export { alternatingCharacters };
