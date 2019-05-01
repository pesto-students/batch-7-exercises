/**
 * Pass the test below and then complete 100% coverage
 */

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  getLength() {
    return this.count;
  }

  push(item) {
    this.items.push(item);
    this.count = this.count + 1;
  }

  pop() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }

    return this.items.pop();
  }

  // returns top element in the stack
  peek() {
    return this.items.slice(-1)[0];
  }
}

describe('stack test', () => {
  let myStack;
  beforeEach(() => {
    myStack = new Stack();
    myStack.push(3);
    myStack.push(2);
    myStack.push(1);
  });

  test('should push elements to stack in order', () => {
    const actual = myStack.items;
    const expected = [3, 2, 1];

    expect(actual).toEqual(expected);
  });
});
