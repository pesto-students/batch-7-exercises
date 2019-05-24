import { isUndefined, isNull } from 'util';

function type(data) {
  if (isNull(data)) {
    return 'Null';
  }
  if (isUndefined(data)) {
    return 'Undefined';
  }
  if (typeof data === 'string') {
    return 'String';
  }
  if (Array.isArray(data)) {
    return 'Array';
  }
  if (typeof data === 'function') {
    return 'Function';
  }
  if (typeof data === 'boolean') {
    return 'Boolean';
  }
  if (data instanceof RegExp) {
    return 'RegExp';
  }
  if (typeof data === 'object') {
    return 'Object';
  }
  return 'Number';
}

export { type };
