import { values } from './values';

describe('values', () => {
  const obj = {
    a: 100, b: [1, 2, 3], c: { x: 200, y: 300 }, d: 'D', e: null, f: undefined,
  };

  class C {
    constructor() { this.a = 100; this.b = 200; }
  }
  C.prototype.x = () => 'x';
  C.prototype.y = 'y';
  const cobj = new C();

  it("returns an array of the given object's values", () => {
    const vs = values(obj).sort();
    const ts = [[1, 2, 3], 100, 'D', { x: 200, y: 300 }, null, undefined];
    expect(vs.length).toEqual(ts.length);
    expect(vs[0]).toEqual(ts[0]);
    expect(vs[1]).toEqual(ts[1]);
    expect(vs[2]).toEqual(ts[2]);
    expect(vs[3]).toEqual(ts[3]);
    expect(vs[4]).toEqual(ts[4]);
    expect(vs[5]).toEqual(ts[5]);

    expect(values({
      hasOwnProperty: false,
    })).toEqual([false]);
  });

  it("does not include the given object's prototype properties", () => {
    expect(values(cobj)).toEqual([100, 200]);
  });
});
