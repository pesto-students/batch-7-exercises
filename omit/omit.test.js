import { omit } from './omit';

describe('omit', () => {
  const obj = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6,
  };

  it('copies an object omitting the listed properties', () => {
    expect(omit(['a', 'c', 'f'], obj)).toEqual({ b: 2, d: 4, e: 5 });
  });

  it('includes prototype properties', () => {
    function F(param) { this.x = param; }
    F.prototype.y = 40;
    F.prototype.z = 50;
    const obj2 = new F(30);
    obj2.v = 10; obj2.w = 20;
    expect(omit(['w', 'x', 'y'], obj2)).toEqual({ v: 10, z: 50 });
  });
});
