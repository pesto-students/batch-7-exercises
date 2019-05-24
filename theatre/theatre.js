function theatre(customers) {
  const MOVIE_TICKET_PRICE = 10;
  const map = new Map();
  map.set(10, 0);
  map.set(20, 0);
  map.set(50, 0);
  for (const cust of customers) {
    let change = cust - MOVIE_TICKET_PRICE;
    while (change !== 0) {
      if (change >= 20 && map.get(20) !== 0) {
        map.set(20, map.get(20) - 1);
        change -= 20;
      } else if (change >= 10 && map.get(10) !== 0) {
        map.set(10, map.get(10) - 1);
        change -= 10;
      } else {
        return false;
      }
    }
    map.set(cust, map.get(cust) + 1);
  }
  return true;
}

export { theatre };
