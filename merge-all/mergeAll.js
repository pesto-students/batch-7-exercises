function mergeAll(objects) {
  const mergedObject = {};
  objects.forEach((object) => {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        mergedObject[key] = object[key];
      }
    }
  });
  return mergedObject;
}

export { mergeAll };
