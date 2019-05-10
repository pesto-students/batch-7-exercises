function sumEvenArgs(...args) {
  return args.reduce((acc, element) => {
    const isEven = element % 2 === 0;
    return acc + (isEven ? element : 0);
  }, 0);
}

export { sumEvenArgs };
