class Queue {
  constructor() {
    this.linkedList = [];
  }

  isEmpty() {
    return this.linkedList[0] === undefined;
  }

  enqueue(data) {
    this.linkedList.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList[0];
  }

  toString(printFn) {
    return this.linkedList
      .map((node) => {
        if (printFn) {
          return printFn(node);
        }
        return node.toString();
      })
      .join(',');
  }
}
export { Queue };
