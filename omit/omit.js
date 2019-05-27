/* eslint-disable guard-for-in */
function omit(omitKey, object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys
    .filter(key => !omitKey.includes(key))
    .reduce((acc, key) => ({ ...acc, [key]: object[key] }), {});
}

export { omit };
