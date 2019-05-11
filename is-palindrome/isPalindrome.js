function isPalindrome(input) {
  const inputString = input.toString();

  // Removes unnecessary charecters from inputString
  const filteredInputString = inputString.toLowerCase().replace(/[\W_]/g, '');

  const reversedInputString = filteredInputString
    .split('')
    .reverse()
    .join('');

  return filteredInputString === reversedInputString;
}

export { isPalindrome };
