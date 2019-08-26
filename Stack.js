class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

module.exports = Stack;