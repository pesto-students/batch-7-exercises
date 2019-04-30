import { Readable } from 'stream';
import getStream from 'get-stream';

import { toReadableStream } from './toReadableStream';

const fixture = 'foo bar';

describe('toReadable', () => {
  test('string', async () => {
    const stream = toReadableStream(fixture);
    expect(stream instanceof Readable).toBe(true);
    expect(await getStream(stream)).toBe(fixture);
  });

  test('buffer', async () => {
    const stream = toReadableStream(Buffer.from(fixture));
    expect(await getStream(stream)).toBe(fixture);
  });
});
