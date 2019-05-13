
function sumEvenArgs(...args) {
  const sumOfEvenArguments = args.filter((number) => {
    number % 2 === 0
  }).reduce((accumulator,currentValue) => {
    accumulator + currentValue
  })
}
}

export {
  sumEvenArgs,
};
