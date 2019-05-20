
function privateProps(target, prop) {
  let handler = {
    get: (target, prop) => {
      if ( typeof prop === 'function') {
        return prop(target);
      }
      if ( target.hasOwnProperty(prop)) {
        if (prop[0] !=='_') {
          return target[prop];
        }
      }
    },
  };
  let p = new Proxy(target, handler);
  console.log(p);
}

export {
  privateProps,
};
// let myProxy;
// const privacyFilter = (prop) => {
//   return prop.indexOf('_') === 0;
// };
// const myObj = {
//   _private: 'secret',
//   public: 'hello',
//   getPrivate: function getPrivate() {
//     return this._private; // eslint-disable-line no-underscore-dangle
//   },
// };
// myProxy = privateProps(myObj, privacyFilter);
// console.log(myProxy.getPrivate());