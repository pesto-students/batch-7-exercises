
function allPromises(promise) {
  return (Promise.all(promise));
  
}

export {
  allPromises,
};
// const p1 = new Promise(res => res(1));
//     const p2 = 2;
//     const p3 = Promise.resolve(3);
//     allPromises([p1, p2, p3]);