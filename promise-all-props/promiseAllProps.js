import { resolve } from "url";

function promiseAllProps(obj) {
  var obj1 =  {
    foo: obj.foo.then((val)=> {return val}),
    bar: obj.foo.then((val)=> {return val}),
  }; 
  return Promise.resolve(obj1);
}

export {
  promiseAllProps,
};
