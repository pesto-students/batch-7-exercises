import { dateFormatTz } from './dateFormatTz';

const sinon = require('sinon');

describe('dateFormatTz', () => {
  let clock;
  let stub;
  const date = new Date(2018, 10, 10, 10, 0, 0, 0, 0);

  function setOffset(offset) {
    stub = sinon.stub(Date.prototype, 'getTimezoneOffset').returns(offset);
  }

  beforeAll(() => {
    clock = sinon.useFakeTimers(date.getTime());
  });

  afterAll(() => {
    clock.restore();
  });

  afterEach(() => {
    if (stub) {
      stub.restore();
      stub = undefined;
    }
  });

  test('error', () => {
    expect(() => dateFormatTz('foo')).toThrow('Expected `date` to be a `Date`, got `string`');
    expect(() => dateFormatTz(new Date(), 'foo')).toThrow('Expected `offset` to be a `number`, got `string`');
  });

  test('no offset', () => {
    setOffset(0);

    expect(dateFormatTz()).toBe('2018-11-10T10:00:00+00:00');
    expect(dateFormatTz(new Date())).toBe('2018-11-10T10:00:00+00:00');
    expect(dateFormatTz(new Date(2018, 11, 25, 11, 0, 0, 0))).toBe('2018-12-25T11:00:00+00:00');
  });

  test('positive timezone offset', () => {
    setOffset(120);

    expect(dateFormatTz()).toBe('2018-11-10T10:00:00-02:00');
  });

  test('negative timezone offset', () => {
    setOffset(-120);

    expect(dateFormatTz()).toBe('2018-11-10T10:00:00+02:00');
  });

  test('half timezone offset', () => {
    setOffset(-30);

    expect(dateFormatTz()).toBe('2018-11-10T10:00:00+00:30');
  });

  test('pass in offset', () => {
    setOffset(-120);

    expect(dateFormatTz(0)).toBe('2018-11-10T08:00:00+00:00');
    expect(dateFormatTz(1)).toBe('2018-11-10T09:00:00+01:00');
    expect(dateFormatTz(2)).toBe('2018-11-10T10:00:00+02:00');
    expect(dateFormatTz(-1)).toBe('2018-11-10T07:00:00-01:00');
    expect(dateFormatTz(-2)).toBe('2018-11-10T06:00:00-02:00');
    expect(dateFormatTz(-2.5)).toBe('2018-11-10T05:30:00-02:30');
    expect(dateFormatTz(new Date(2018, 11, 25, 11, 0, 0, 0), -1)).toBe('2018-12-25T08:00:00-01:00');
  });
});
