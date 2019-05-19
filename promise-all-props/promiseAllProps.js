import { resolve } from "url";

function promiseAllProps(obj) {
  let resultObj = {};
  for (var key in obj) {
    obj[key].then(res => {
      resultObj[key] = res;
    });
  }
  return Promise.resolve(resultObj);
}

export { promiseAllProps };
