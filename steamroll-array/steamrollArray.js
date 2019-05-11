function steamrollArray(nestedArray) {
  return nestedArray.reduce((acc, value) => (Array.isArray(value)
    ? acc.concat(steamrollArray(value))
    : acc.concat(value)), []);
}

export { steamrollArray };
