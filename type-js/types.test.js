import { type } from './types';

describe('type', () => {
  it('"Array" if given an array literal', () => {
    expect(type([1, 2, 3])).toBe('Array');
  });

  // it('"Arguments" if given an arguments object', function() {
  //   var args = (function() { return arguments; }());
  //   expect(type(args), 'Arguments');
  // });

  it('"Object" if given an object literal', () => {
    expect(type({ batman: 'na na na na na na na' })).toBe('Object');
  });

  it('"RegExp" if given a RegExp literal', () => {
    expect(type(/[A-z]/)).toBe('RegExp');
  });

  it('"Number" if given a numeric value', () => {
    expect(type(4)).toBe('Number');
  });

  it('"Number" if given the NaN value', () => {
    expect(type(NaN)).toBe('Number');
  });

  it('"String" if given a String literal', () => {
    expect(type('Gooooodd Mornning Ramda!!')).toBe('String');
  });

  it('"String" if given a String object', () => {
    expect(type('I am a String object')).toBe('String');
  });

  it('"Null" if given the null value', () => {
    expect(type(null)).toBe('Null');
  });

  it('"Undefined" if given the undefined value', () => {
    expect(type(undefined)).toBe('Undefined');
  });
});
