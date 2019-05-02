function isPalindrome(inputString) {
  // Removes symbols [ '_', '-', '/', ' ' ] from inputString
  const filteredInputString = inputString
    .toString()
    .replace(/[_,-/\s+]/g, '')
    .replace(')', '(');

  const lastIndexOfString = filteredInputString.length - 1;

  for (let i = 0; i < filteredInputString.length / 2; i += 1) {
    const char1 = filteredInputString.charAt(i).toUpperCase();
    const char2 = filteredInputString
      .charAt(lastIndexOfString - i)
      .toUpperCase();

    if (char1 !== char2) {
      return false;
    }
  }
  return true;
}

export { isPalindrome };
