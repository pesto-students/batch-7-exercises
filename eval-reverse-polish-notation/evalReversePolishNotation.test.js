import { evalReversePolishNotation } from './evalReversePolishNotation';

describe('evalReversePolishNotation', () => {
  it('basic addition', () => {
    const result = evalReversePolishNotation('7 3 +');

    expect(result).toEqual(10);
  });

  it('basic multiplication', () => {
    const result = evalReversePolishNotation('2 2 *');
    
    expect(result).toEqual(4);
  });

  it('multiple additions', () => {
    const result = evalReversePolishNotation('1 1 1 + +');
    
    expect(result).toEqual(3);
  });

  it('combined methods', () => {
    const result = evalReversePolishNotation('2 5 3 + *');
    
    expect(result).toEqual(16);
  });
});
