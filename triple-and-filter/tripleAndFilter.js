function tripleAndFilter(array) {
  const triples = array.map(number => number * 3);
  return triples.filter(number => number % 5 === 0);
}

export { tripleAndFilter };
