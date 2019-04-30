import { mergeAll } from './mergeAll';

describe('2 mergeAll', () => {
  it('merges a list of objects together into one object', () => {
    expect(mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }])).toEqual({ foo: 1, bar: 2, baz: 3 });
  });

  it('gives precedence to later objects in the list', () => {
    expect(mergeAll([{ foo: 1 }, { foo: 2 }, { bar: 2 }])).toEqual({ foo: 2, bar: 2 });
  });

  it('ignores inherited properties', () => {
    function Foo() {}
    Foo.prototype.bar = 42;
    const foo = new Foo();
    const res = mergeAll([foo, { fizz: 'buzz' }]);
    expect(res).toEqual({ fizz: 'buzz' });
  });
});
