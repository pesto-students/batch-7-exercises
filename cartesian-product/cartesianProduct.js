function cartesianProduct(setA, setB) {
  if (setA === null || setB === null) return null;

  const cartesianProductSet = [];

  setA.forEach((a) => {
    setB.forEach((b) => {
      cartesianProductSet.push([a, b]);
    });
  });

  return cartesianProductSet;
}

export {
  cartesianProduct,
};
