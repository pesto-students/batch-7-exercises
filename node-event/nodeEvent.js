const events = require('events');

const greetEmitter = new events.EventEmitter();

function greet(name) {
  if (typeof name !== 'string') {
    greetEmitter.emit('error');
  } else {
    greetEmitter.emit('greet', name);
  }
}

export { greet, greetEmitter };
