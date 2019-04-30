import net from 'net';
import Stream from 'stream';
import { isStream } from './isStream';


describe('isStream', () => {
  test('isStream()', () => {
    expect(isStream(new Stream.Stream())).toBe(true);
    expect(isStream(new Stream.Readable())).toBe(true);
    expect(isStream(new Stream.Writable())).toBe(true);
    expect(isStream(new Stream.Duplex())).toBe(true);
    expect(isStream(new Stream.Transform())).toBe(true);
    expect(isStream(new Stream.PassThrough())).toBe(true);
    expect(isStream(new net.Socket())).toBe(true);
    expect(isStream({})).toBe(false);
    expect(isStream(null)).toBe(false);
    expect(isStream(undefined)).toBe(false);
    expect(isStream('')).toBe(false);
  });

  test('isStream.writable()', () => {
    expect(isStream.writable(new Stream.Writable())).toBe(true);
    expect(isStream.writable(new Stream.Duplex())).toBe(true);
    expect(isStream.writable(new Stream.Transform())).toBe(true);
    expect(isStream.writable(new Stream.PassThrough())).toBe(true);
    expect(isStream.writable(new Stream.Stream())).toBe(false);
    expect(isStream.writable(new Stream.Readable())).toBe(false);
    expect(isStream.writable(new net.Socket())).toBe(false);
  });

  test('isStream.readable()', () => {
    expect(isStream.readable(new Stream.Readable())).toBe(true);
    expect(isStream.readable(new Stream.Duplex())).toBe(true);
    expect(isStream.readable(new Stream.Transform())).toBe(true);
    expect(isStream.readable(new Stream.PassThrough())).toBe(true);
    expect(isStream.readable(new Stream.Stream())).toBe(false);
    expect(isStream.readable(new Stream.Writable())).toBe(false);
    expect(isStream.readable(new net.Socket())).toBe(false);
  });

  test('isStream.duplex()', () => {
    expect(isStream.duplex(new Stream.Duplex())).toBe(true);
    expect(isStream.duplex(new Stream.Transform())).toBe(true);
    expect(isStream.duplex(new Stream.PassThrough())).toBe(true);
    expect(isStream.duplex(new Stream.Stream())).toBe(false);
    expect(isStream.duplex(new Stream.Readable())).toBe(false);
    expect(isStream.duplex(new Stream.Writable())).toBe(false);
  });

  test('isStream.transform()', () => {
    expect(isStream.transform(new Stream.Transform())).toBe(true);
    expect(isStream.transform(new Stream.PassThrough())).toBe(true);
    expect(isStream.transform(new Stream.Duplex())).toBe(false);
    expect(isStream.transform(new Stream.Stream())).toBe(false);
    expect(isStream.transform(new Stream.Readable())).toBe(false);
    expect(isStream.transform(new Stream.Writable())).toBe(false);
  });
});
