const stream = require('stream');
const net = require('net');

const isStream = obj => obj instanceof stream;
isStream.writable = obj => obj instanceof stream.Writable && !(obj instanceof net.Socket);
isStream.readable = obj => obj instanceof stream.Readable && !(obj instanceof net.Socket);
isStream.duplex = obj => obj instanceof stream.Duplex;
isStream.transform = obj => obj instanceof stream.Transform;

export { isStream };
