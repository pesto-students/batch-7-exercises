function createStackOfChar(arg) {
  const stack = [];
  if (typeof arg === 'string') {
    const pattern = /[A-Z]|[a-z]/;
    const charArr = arg.split('');
    charArr.forEach((char) => {
      if (char.match(pattern)) {
        stack.push(char.toLowerCase());
      }
    });
  } else if (typeof arg === 'number') {
    const numberArr = arg.toString().split('');
    numberArr.forEach((char) => {
      stack.push(char);
    });
  } else {
    throw new Error(`Expected string or number. Received ${typeof arg}`);
  }
  return stack;
}
function isPalindrome(arg) {
  const stack = createStackOfChar(arg);
  let inputIsPalidrome = true;
  while (stack.length > 0) {
    if (stack.length === 1) {
      break;
    }
    const lastEl = stack.pop();
    const firstEl = stack.shift();
    if (firstEl !== lastEl) {
      inputIsPalidrome = false;
      break;
    }
  }
  return inputIsPalidrome;
}

export { isPalindrome };
