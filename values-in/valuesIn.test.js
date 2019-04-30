import { valuesIn } from './valuesIn';

describe('valuesIn', () => {
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
    const vs = valuesIn(obj);
    expect(vs.length).toBe(6);
    expect(vs.indexOf(100) >= 0).toBe(true);
    expect(vs.indexOf('D') >= 0).toBe(true);
    expect(vs.indexOf(null) >= 0).toBe(true);
    expect(vs.indexOf(undefined) >= 0).toBe(true);
    expect(vs.indexOf(obj.b) >= 0).toBe(true);
    expect(vs.indexOf(obj.c) >= 0).toBe(true);
  });

  it("includes the given object's prototype properties", () => {
    const vs = valuesIn(cobj);
    expect(vs.length).toBe(4);
    expect(vs.indexOf(100) >= 0).toBe(true);
    expect(vs.indexOf(200) >= 0).toBe(true);
    expect(vs.indexOf(cobj.x) >= 0).toBe(true);
    expect(vs.indexOf('y') >= 0).toBe(true);
  });
});
