import {
  clubMember, objectSara, endDay, mikeStringified,
} from './json-data';

describe('JSON edit', () => {
  test('city param should exist on the json object', () => {
    expect(clubMember.city).not.toBe(undefined);
  });
});

describe('using JSON.parse', () => {
  test('should correctly use JSON.parse on the JSON', () => {
    expect(typeof objectSara).toEqual('object');
  });
});

describe('Simulating associative arrays', () => {
  test('should use as array correctly', () => {
    expect(endDay).toBe('Wednesday');
  });
});

describe('JSON.stringify', () => {
  test('should use JSON.stringify() properly on the object', () => {
    expect(typeof mikeStringified).toEqual('string');
  });
});
