function applyOperator(...args) {
  const operator = args[0];
  const operands = [...args.slice(1)];

  if (operator === '+') {
    return operands.reduce((sum, num) => sum + num, 0);
  }
  if (operator === '-') {
    return operands.reduce((sum, num) => sum - num, 0);
  }
  if (operator === '*') {
    return operands.reduce((product, num) => product * num, 1);
  }
  if (operator === '/') {
    const value = operands.reduce((result, num) => result / num);
    return parseFloat(value.toFixed(4));
  }
  if (operator === '%') {
    return operands.reduce((result, num) => result % num);
  }
  throw new Error();
}

export { applyOperator };
