
function tripleAndFilter(arr) {
  arr = arr.filter(el => {
    if(el%5 === 0) {
      return el;
    }
  })
}

export {
  tripleAndFilter,
};
