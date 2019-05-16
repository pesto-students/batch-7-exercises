function mergeAll(objectList) {
  return objectList.reduce(
    (acc, object) => ({
      ...acc,
      ...object,
    }),
    {},
  );
}

export { mergeAll };
