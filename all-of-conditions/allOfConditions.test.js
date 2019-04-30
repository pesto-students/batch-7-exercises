import { allOfConditions } from './allOfConditions';

describe('allOfConditions', () => {
  it('calls passed function with provided input', () => {
    const input = 'input';
    const isTruthy = jest.fn();

    allOfConditions(isTruthy)(input);

    expect(isTruthy).toBeCalledWith(input);
  });

  it('calls provided functions one after another', () => {
    const input = 'input';
    const isTruthy = jest.fn().mockReturnValue(true);
    const isDateInstance = jest.fn().mockReturnValue(true);

    allOfConditions(isTruthy, isDateInstance)(input);

    expect(isTruthy).toBeCalled();
    expect(isDateInstance).toBeCalled();
  });

  it('stops calling next functions if previous one returns false', () => {
    const input = 'input';
    const isTruthy = jest.fn().mockReturnValue(false);
    const isDateInstance = jest.fn();

    allOfConditions(isTruthy, isDateInstance)(input);

    expect(isTruthy).toBeCalled();
    expect(isDateInstance).not.toBeCalled();
  });
});
