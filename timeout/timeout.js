import { reject } from "rsvp";
import { resolve } from "path";

function timeout(stringVal) {
  var testPromise = new Promise(resolve,reject => {
    resolve('Hello '+stringVal);
  })
  return testPromise;
}

export {
  timeout,
};
