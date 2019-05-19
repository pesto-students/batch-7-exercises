function getOpenBracket(brace) {
  if (brace === ')') {
    return '(';
  }
  if (brace === '}') {
    return '{';
  }
  if (brace === ']') {
    return '[';
  }
  return null;
}

function balancedBraces(expression) {
  const stack = [];
  for (let i = 0; i < expression.length; i += 1) {
    const brace = expression[i];
    const isOpenBracket = brace === '(' || brace === '{' || brace === '[';
    const isCloseBracket = brace === ')' || brace === '}' || brace === ']';

    if (isOpenBracket) {
      stack.push(brace);
    } else if (isCloseBracket) {
      const openBrace = getOpenBracket(brace);
      if (stack.length === 0 || stack.pop() !== openBrace) {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  }
  return false;
}

export { balancedBraces };
