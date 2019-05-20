
function proxyIterable(object, prop) {
  console.log(object);
  
}

// export {
//   proxyIterable,
// };
let i = 0;

    const createFixture = () => {
      return {
        increment(value) {
          i += value;
          return i;
        },
      };
    };

    const array = [
      createFixture(),
      createFixture(),
      createFixture(),
      createFixture(),
    ];

    const proxyArray = proxyIterable(array);
    proxyIterable(array).increment(2);
    console.log(proxyArray);