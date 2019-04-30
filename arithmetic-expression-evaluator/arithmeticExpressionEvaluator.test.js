import { arithmeticExpressionEvaluator } from './arithmeticExpressionEvaluator';

describe('arithmeticExpressionEvaluator', () => {
  it('return the expected result', () => {
    // simple expressions
    expect(arithmeticExpressionEvaluator('1 + 1')).toEqual(2);
    expect(arithmeticExpressionEvaluator('6 - 3')).toEqual(3);
    expect(arithmeticExpressionEvaluator('2 * 2')).toEqual(4);
    expect(arithmeticExpressionEvaluator('10 / 2')).toEqual(5);

    // complex expressions
    expect(arithmeticExpressionEvaluator('1 + 3 * 5')).toEqual(16);
    expect(arithmeticExpressionEvaluator('100 / 2 / 5')).toEqual(10);
    expect(arithmeticExpressionEvaluator('256 - 30 * 5 + 3')).toEqual(109);
  });

  it('completely ignores whitespaces', () => {
    expect(arithmeticExpressionEvaluator('1      +    1')).toEqual(2);
    expect(arithmeticExpressionEvaluator('6 -\n3')).toEqual(3);
    expect(arithmeticExpressionEvaluator('2 *    2')).toEqual(4);
    expect(arithmeticExpressionEvaluator('10\n\n\n   \n\n/\n\n\t    2')).toEqual(5);
  })

  it('throws error when expression contains invalid characters', () => {
    // For simplicity's sake, we don't want to support parens
    expect(() => arithmeticExpressionEvaluator('(5 + 5) * 2')).toThrow();

    // For simplicity's sake, we don't want to support exponentiation
    expect(() => arithmeticExpressionEvaluator('10^4')).toThrow();

    // For simplicity's sake, we don't want to support floating point numbers
    expect(() => arithmeticExpressionEvaluator('10.123 * 2')).toThrow();
  });

  it('throws error when expression is not string', () => {
    expect(() => arithmeticExpressionEvaluator(12)).toThrow();
    expect(() => arithmeticExpressionEvaluator([])).toThrow();
    expect(() => arithmeticExpressionEvaluator({})).toThrow();
    expect(() => arithmeticExpressionEvaluator(NaN)).toThrow();
    expect(() => arithmeticExpressionEvaluator(null)).toThrow();
    expect(() => arithmeticExpressionEvaluator()).toThrow();
  });
});
