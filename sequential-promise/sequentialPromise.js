import { Promise } from "rsvp";

function sequentialPromise(promises) {
  return promises.reduce((acc, currentPromise) => (acc.then(currentPromise)), Promise.resolve(1));
 
}

export {
  sequentialPromise,
};
