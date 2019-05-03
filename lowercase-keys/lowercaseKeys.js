function lowercaseKeys(Obj) {
  const lowerCasedObj = {};

  Object.entries(Obj).forEach(([key, value]) => {
    lowerCasedObj[key.toLowerCase()] = value;
  });

  return lowerCasedObj;
}

export { lowercaseKeys };
