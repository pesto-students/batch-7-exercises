function mapFilterAndReduce(args) {
  let result = args
    .map(el => el.firstName)
    .filter(el => el.length < 5)
    .reduce((acc, curr) => {
      acc[curr] = curr.length;
      return acc;
    }, {});
  return result;
}

export { mapFilterAndReduce };
