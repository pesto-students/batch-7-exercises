class PriorityQueue {
  constructor() {
    this.queue = [];
    this.iterator = this.queue[Symbol.iterator]();
  }

  add(value, priority) {
    let positionInQueue;
    let index;
    for (index = 0; index < this.queue.length; index += 1) {
      if (this.queue[index].priority > priority) {
        positionInQueue = index;
        break;
      }
    }

    if (positionInQueue === undefined) {
      positionInQueue = this.queue.length;
    }
    this.queue.splice(positionInQueue, 0, { value, priority });
    this.iterator = this.queue[Symbol.iterator]();
  }

  peek() {
    return this.queue[0].value;
  }

  poll() {
    return this.iterator.next().value.value;
  }

  changePriority(value, newPriority) {
    this.queue = this.queue.filter(object => object.value !== value);
    this.add(value, newPriority);
  }

  hasValue(element) {
    const filteredQueue = this.queue.filter(object => object.value === element);
    if (filteredQueue.length === 0) {
      return false;
    }
    return true;
  }
}

export { PriorityQueue };
