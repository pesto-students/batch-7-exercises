/* eslint-disable guard-for-in */
function promiseAllProps(object) {
  return new Promise((resolve, reject) => {
    const promises = [];
    for (const key in object) {
      promises.push(object[key]);
    }
    Promise.all(promises)
      .then((resolvedArr) => {
        const resolvedObj = {};
        let i = 0;
        for (const key in object) {
          resolvedObj[key] = resolvedArr[i];
          i += 1;
        }
        return resolve(resolvedObj);
      })
      .catch(e => reject(e));
  });
}

export { promiseAllProps };
