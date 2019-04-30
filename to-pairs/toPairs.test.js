import { toPairs } from './toPairs';

describe('toPairs', () => {
  it('converts an object into an array of two-element [key, value] arrays', () => {
    expect(toPairs({ a: 1, b: 2, c: 3 })).toEqual([['a', 1], ['b', 2], ['c', 3]]);
  });

  it("only iterates the object's own properties", () => {
    const F = function () {
      this.x = 1;
      this.y = 2;
    };
    F.prototype.protoProp = 'you can\'t see me';
    const f = new F();
    expect(toPairs(f)).toEqual([['x', 1], ['y', 2]]);
  });
});
