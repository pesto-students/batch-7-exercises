import { resolve } from "path";
import { reject } from "rsvp";

function timeout(message) {
  return new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve(`Hello ${message}`)
    },10)
  })
 
}

export {
  timeout,
};
