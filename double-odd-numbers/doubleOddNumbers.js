function doubleOddNumbers(args) {
  let result = args.filter(el => el % 2 != 0).map(el => el * 2);
  return result;
}

export { doubleOddNumbers };
