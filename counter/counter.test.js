import { counter } from './counter';

describe('counter', () => {
  it('should return a function', () => {
    expect(typeof counter()).toBe('function');
  });
  it('should return 1 when the returned function is invoked', () => {
    expect(counter()()).toBe(1);
  });
  it('should increment and return the number each time the function is invoked', () => {
    const counterFunction = counter();
    expect(counterFunction()).toBe(1);
    expect(counterFunction()).toBe(2);
    expect(counterFunction()).toBe(3);
    expect(counterFunction()).toBe(4);
    expect(counterFunction()).toBe(5);
  });
});
