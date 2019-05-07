import { resolve } from "uri-js";
import { reject } from "rsvp";

function rejectPromise() {
  return new Promise(function(resolve){
    return resolve('REJECTED!');
  })   
}

export {
  rejectPromise,
};
