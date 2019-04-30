import { objectAssign } from './objectAssign';

describe('objectAssign', () => {
  it('should return { foo: 1 }', () => {
    expect(objectAssign({ foo: 1 })).toEqual({ foo: 1 });
    expect(objectAssign({ foo: 1 }, null)).toEqual({ foo: 1 });
  });

  it('should return { foo: 1, bar: 2 }', function () {
    expect(objectAssign({ foo: 1 }, { bar: 2 })).toEqual({ foo: 1, bar: 2 });
  });

  it('should return { foo: 1, bar: 2, baz: 3 }', function () {
    expect(objectAssign({ foo: 1 }, { bar: 2 }, { baz: 3 }))
      .toEqual({ foo: 1, bar: 2, baz: 3 });
  });

  it('should return { foo: 1, bar: 3, baz: 4 }', function () {
    expect(objectAssign({ foo: 1, bar: 2 }, { bar: 3, baz: 4 }))
      .toEqual({ foo: 1, bar: 3, baz: 4 });
  });

  it('should change target arguments and not change source arguments', function () {
    var target = { foo: 1 };
    var sourceOne = { bar: 2 };
    var sourceTwo = { baz: 3 };

    expect(objectAssign(target, sourceOne, sourceTwo)).toEqual({ foo: 1, bar: 2, baz: 3 });
    expect(target).toEqual({ foo: 1, bar: 2, baz: 3 });
    expect(sourceOne).toEqual({ bar: 2 });
    expect(sourceTwo).toEqual({ baz: 3 });
  });
});
