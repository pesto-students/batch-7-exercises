import { applyOperator } from './applyOperator';

describe('applyOperator', () => {
  test('should return 0 when no operands are specified', () => {
    expect(applyOperator('+')).toEqual(0);
  });

  test('should apply the operator when +, -, *, /, % operator is applied', () => {
    expect(applyOperator('+', 1, 2, 3, 4, 5)).toEqual(15);
    expect(applyOperator('+', 1)).toEqual(1);

    expect(applyOperator('-', 1, 2, 3, 4, 5)).toEqual(-15);
    expect(applyOperator('-', 1)).toEqual(-1);

    expect(applyOperator('*', 1, 2, 3, 4, 5)).toEqual(120);
    expect(applyOperator('*', 1)).toEqual(1);

    expect(applyOperator('/', 1, 2, 3, 4, 5)).toEqual(0.0083);
    expect(applyOperator('/', 1)).toEqual(1);

    expect(applyOperator('%', 27, 13, 3)).toEqual(1);
    expect(applyOperator('%', 21)).toEqual(21);
  });

  test('should throw error when operator is not specified', () => {
    expect(() => applyOperator()).toThrowError();
  });
});
