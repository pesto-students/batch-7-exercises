function applyOperator(...args) {
  if (args.length === 0) throw new Error('Operator is not specified!');
  let output = 0;
  switch (args[0]) {
    case '+':
      for (let i = 1; i < args.length; i += 1) {
        output += args[i];
      }
      break;
    case '-':
      for (let i = 1; i < args.length; i += 1) {
        output -= args[i];
      }
      break;
    case '*':
      output = 1;
      for (let i = 1; i < args.length; i += 1) {
        output *= args[i];
      }
      break;
    case '/':
      output = 1;
      for (let i = 1; i < args.length; i += 1) {
        output /= args[i];
      }
      // eslint-disable-next-line radix
      output = parseInt(output * 10000) / 10000;
      break;
    case '%':
      //   if (args[1] !== undefined) {
      //     let x = [],
      //       first = 0;
      //     [first, output, ...x] = args;
      //   }
      output = args[1];
      for (let i = 2; i < args.length; i += 1) {
        output %= args[i];
      }
      break;
    default:
      break;
  }
  return output;
}

export { applyOperator };
