import { counterFactory } from './counterFactory';

describe('counterFactory', () => {
  it('should return an object with an increment method and a decrement method', () => {
    expect(typeof counterFactory().increment).toBe('function');
    expect(typeof counterFactory().decrement).toBe('function');
  });
  it('should have a working increment method that increments the private counter and returns the new value', () => {
    const myCounter = counterFactory();
    expect(myCounter.increment()).toBe(1);
    expect(myCounter.increment()).toBe(2);
    expect(myCounter.increment()).toBe(3);
    expect(myCounter.increment()).toBe(4);
  });
  it('should have a working decrement method that decrements the private counter and returns the new value', () => {
    const myCounter = counterFactory();
    expect(myCounter.decrement()).toBe(-1);
    expect(myCounter.decrement()).toBe(-2);
    expect(myCounter.decrement()).toBe(-3);
    expect(myCounter.decrement()).toBe(-4);
  });
});
