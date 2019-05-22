const stream = require('stream');

function toReadableStream(input) {
  const readable = new stream.Readable();
  readable.push(input);
  readable.push(null);
  return readable;
}

export {
  toReadableStream,
};
