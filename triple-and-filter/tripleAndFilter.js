
function tripleAndFilter(arraytoBeTripledandFiltered) {
  const tripledAndFilteredArray = arraytoBeTripledandFiltered.map((number)=> {
    number * 3
  }).filter((number)=> {
    number % 5 ===0
  })
}

export {
  tripleAndFilter,
};
