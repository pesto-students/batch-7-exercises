import { factorial } from './factorial';

describe('factorial', () => {
  test('should return a number', () => {
    expect(typeof factorial(0)).toEqual('number');
    expect(factorial(5)).toEqual(120);
    expect(factorial(20)).toEqual(2432902008176640000);
  });
});
