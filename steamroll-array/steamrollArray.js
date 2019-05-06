function steamrollArray(nestedArr) {
  return nestedArr.reduce((acc, el) => {
    if (Array.isArray(el)) {
      return acc.concat(steamrollArray(el));
    }
    return acc.concat(el);
  }, []);
}

export { steamrollArray };
