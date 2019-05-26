import { Stream } from 'stream';

const isStream = object => object instanceof Stream.Stream;

isStream['writable'] = obj => (obj instanceof Stream.Writable && obj.writable == true && typeof obj._writableState == 'object');

isStream['readable'] = obj => ( obj instanceof Stream.Readable && obj.readable == true && typeof obj._readableState == 'object');

isStream['duplex'] = obj => ( obj instanceof Stream.Duplex);

isStream['transform'] = obj => ( obj instanceof Stream.Transform);
export { isStream };
