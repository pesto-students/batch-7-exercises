import { primalityTest } from './primalityTest';

describe('primalityTest', () => {
  test('should be true for all primes', () => {
    expect(primalityTest(1)).toBeFalsy();
    expect(primalityTest(2)).toBeTruthy();
    expect(primalityTest(3)).toBeTruthy();
    expect(primalityTest(5)).toBeTruthy();
    expect(primalityTest(11)).toBeTruthy();
    expect(primalityTest(191)).toBeTruthy();
    expect(primalityTest(191)).toBeTruthy();
    expect(primalityTest(199)).toBeTruthy();

    expect(primalityTest(-1)).toBeFalsy();
    expect(primalityTest(0)).toBeFalsy();
    expect(primalityTest(4)).toBeFalsy();
    expect(primalityTest(6)).toBeFalsy();
    expect(primalityTest(12)).toBeFalsy();
    expect(primalityTest(14)).toBeFalsy();
    expect(primalityTest(25)).toBeFalsy();
    expect(primalityTest(192)).toBeFalsy();
    expect(primalityTest(200)).toBeFalsy();
    expect(primalityTest(400)).toBeFalsy();
  });
});
