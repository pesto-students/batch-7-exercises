
function tripleAndFilter(arraytoBeTripledandFiltered) {
  const tripledAndFilteredArray = arraytoBeTripledandFiltered.map((number)=> {
    return number * 3
  }).filter((number)=> {
    return number % 5 === 0
  })
  return tripledAndFilteredArray
}

export {
  tripleAndFilter,
};
