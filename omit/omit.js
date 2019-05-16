const getRequiredProps = (obj, shouldAddProp) => Object.entries(obj).reduce((acc, [key, value]) => {
  if (shouldAddProp(key)) {
    acc[key] = value;
  }
  return acc;
}, {});

function omit(listOfOmittingProps, obj) {
  const shouldAddProp = prop => !listOfOmittingProps.includes(prop);

  const prototypeProps = Object.getPrototypeOf(obj);
  return {
    ...getRequiredProps(obj, shouldAddProp),
    ...getRequiredProps(prototypeProps, shouldAddProp),
  };
}

export { omit };
