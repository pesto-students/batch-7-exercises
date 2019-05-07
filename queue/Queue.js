class Queue {
  constructor() {
    this.data = [];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  enqueue(data) {
    this.data.push(data);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.data.shift();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.data[0];
  }

  toString(stringifier = null) {
    if (stringifier) {
      return this.data.map(stringifier).join(',');
    }
    return this.data.toString();
  }
}

export { Queue };
