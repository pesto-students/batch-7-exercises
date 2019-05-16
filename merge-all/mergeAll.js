function mergeAll(list) {
  const mergedObject = {};
  list.map((object) => {
    if (object.constructor === Object) {
      for (const key in object) {
        mergedObject[key] = object[key];
      }
    }
    return object;
  });
  return mergedObject;
}

export { mergeAll };
