import { uncurryN } from './uncurryN';

describe('uncurryN', () => {
  function a2(a) {
    return b => a + b;
  }

  function a3(a) {
    return b => c => a + b + c;
  }

  function a3b(a) {
    return b => (c, ...args) => a + b + c + (args[0] || 0) + (args[1] || 0);
  }

  function a4(a) {
    return b => c => d => a + b + c + d;
  }

  it('accepts an arity', () => {
    const uncurried = uncurryN(3, a3);
    expect(uncurried(1, 2, 3)).toBe(6);
  });

  it('returns a function of the specified arity', () => {
    expect(uncurryN(2, a2).length).toBe(2);
    expect(uncurryN(3, a3).length).toBe(3);
    expect(uncurryN(4, a4).length).toBe(4);
  });

  it('forwards extra arguments', () => {
    const g = uncurryN(3, a3b);

    expect(g(1, 2, 3)).toBe(6);
    expect(g(1, 2, 3, 4)).toBe(10);
    expect(g(1, 2, 3, 4, 5)).toBe(15);
  });

  it('works with ordinary uncurried functions', () => {
    expect(uncurryN(2, (a, b) => a + b)(10, 20)).toBe(30);
    expect(uncurryN(3, (a, b, c) => a + b + c)(10, 20, 30)).toBe(60);
  });
});
