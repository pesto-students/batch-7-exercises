
class Queue {
  constructor() {
    this.linkedList = [];
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }

  toString(callbackFunc) {
    let listTostring = '';
    if (callbackFunc) {
      listTostring = this.linkedList.reduce((accumulator, element) => `${accumulator},${callbackFunc(element)}`,
        '');
      listTostring = listTostring.substr(1, listTostring.length);
    } else {
      listTostring = this.linkedList.toString();
    }
    return listTostring;
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
}

export {
  Queue,
};
