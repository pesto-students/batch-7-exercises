import { isIterable } from '../is-iterable/isIterable';

function isIterableEmpty(iterable) {
  if (!isIterable(iterable)) return false;

  const iterator = iterable[Symbol.iterator]();
  const { done } = iterator.next();
  return done;
}

export { isIterableEmpty };
