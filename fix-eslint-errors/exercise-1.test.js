var assert = require("assert");

function promised(val) {
  return new Promise((f) => {
    setTimeout(function () {
      f(val);
    }, 1);
  });
}

function thenabled(val, arr) {
  return {
    then: (f) => {
      setTimeout(() => {
        if (arr) {
          arr.push(val);
        }
        f(val);
      }, 1);
    }
  };
}

var assertResult = function (result, numberArr) {
  assert.deepEqual(result, numberArr);
}

describe("Promise.each", function () {

  it("should return the array's values mapped", function () {
    var a = [promised(1), promised(2), promised(3)];
    var b = [];
    return Promise.resolve(a)
      .mapSeries((val) => {
        b.push(3 - val);
        return val + 2;
      }).then(function (ret) {
        assert.deepEqual(ret, [3, 4, 5]);
        assert.deepEqual(b, [2, 1, 0]);
      });
  });


  it("takes value, index and length", function () {
    var a = [promised(1), promised(2), promised(3)];
    var b = [];
    return Promise.resolve(a)
      .each(function (value, index, length) {
        b.push(value, index, length);
      }).then(function (ret) {
        assert.deepEqual(b, [1, 0, 3, 2, 1, 3, 3, 2, 3]);
      });
  });

  it("waits for returned promise before proceeding next", function () {
    var a = [promised(1), promised(2), promised(3)];
    var b = [];
    return Promise.resolve(a)
      .each((value) => {
        b.push(value);
        return Promise.delay(1)
          .then(() => {
            b.push(value * 2);
          });
      }).then(function (ret) {
        assert.deepEqual(b, [1, 2, 2, 4, 3, 6]);
      });
  });

  it("waits for returned thenable before proceeding next", function () {
    var b = [1, 2, 3];
    var a = [thenabled(1), thenabled(2), thenabled(3)];
    return Promise.resolve(a).each(function (val) {
      b.push(val * 50);
      return thenabled(val * 500, b);
    }).then(function (ret) {
      assert.deepEqual(b, [1, 2, 3, 50, 500, 100, 1000, 150, 1500]);
    });
  });

  it("doesnt iterate with an empty array", function () {
    return Promise.each([], function (val) {
      throw new Error();
    }).then(function (ret) {
      assert.deepEqual(ret, []);
    });
  });

  it("iterates with an array of single item", function () {
    var b = [];
    return Promise.each([promised(1)], function (val) {
      b.push(val);
      return thenabled(val * 2, b);
    }).then(function (ret) {
      assert.deepEqual(b, [1, 2]);
    });
  });
});

describe("Promise.prototype.each", function () {

  it("should return the array's values", function () {
    var a = [promised(1), promised(2), promised(3)];
    var b = [];
    return Promise.resolve(a)
      .each((val) => {
        b.push(3 - val);
        return val;
      }).then(function (ret) {
        assert.deepEqual(ret, [1, 2, 3]);
        assert.deepEqual(b, [2, 1, 0]);
      });
  });


  it("takes value, index and length", function () {
    var a = [promised(1), promised(2), promised(3)];
    var b = [];
    return Promise.resolve(a)
      .each(function (value, index, length) {
        b.push(value, index, length);
      }).then(function (ret) {
        assert.deepEqual(b, [1, 0, 3, 2, 1, 3, 3, 2, 3]);
      });
  });

  it("waits for returned promise before proceeding next", function () {
    var a = [promised(1), promised(2), promised(3)];
    var b = [];
    return Promise.resolve(a)
      .each((value) => {
        b.push(value);
        return Promise.delay(1)
          .then(() => {
            b.push(value * 2);
          });
      }).then((ret) => {
        assert.deepEqual(b, [1, 2, 2, 4, 3, 6]);
      });
  });

  it("waits for returned thenable before proceeding next", function () {
    var b = [1, 2, 3];
    var a = [thenabled(1), thenabled(2), thenabled(3)];
    return Promise.resolve(a).each((val) => {
      b.push(val * 50);
      return thenabled(val * 500, b);
    }).then((ret) => {
      assert.deepEqual(b, [1, 2, 3, 50, 500, 100, 1000, 150, 1500]);
    });
  });

  it("doesnt iterate with an empty array", function () {
    return Promise.resolve([]).each(function (val) {
      throw new Error("Error");
    }).then((ret) => {
      assert.deepEqual(ret, []);
    });
  });

  it("iterates with an array of single item", function () {
    var b = [];
    return Promise.resolve([promised(1)])
      .each((val) => {
        b.push(val);
        return thenabled(val * 2, b);
      }).then(function (ret) {
        assert.deepEqual(b, [1, 2]);
      });
  });
});

describe("mapSeries and each", function () {
  it("is mixed", function () {
    var eachPromise = function () {
      return Promise.each([1, 2, 3], (value) => {
        return value * 2;
      }).then(assertResult, [1, 2, 3]);
    }
    var mapSeriesPromise = Promise.mapSeries([1, 2, 3], (value) => {
      return value * 2;
    })
      .then(assertResult(result, [2, 4, 6]))
      .then(eachPromise)
      .thenReturn([1, 2, 3])
      .mapSeries((value) => {
        return value * 2;
      })
      .then(assertResult(result, [2, 4, 6]))
      .thenReturn([1, 2, 3])
      .each((value) => {
        return value * 2;
      })
      .then(assertResult(result, [1, 2, 3]));

    return mapSeriesPromise;
  })
});
