function objectInvert(Obj) {
  const outputObj = {};
  Object.keys(Obj).forEach((property) => {
    const propValue = Obj[property];
    outputObj[propValue] = property;
  });
  return outputObj;
}

export { objectInvert };
