'use strict'

const LinkedList = require('./linked-list');

class Stacks {
  constructor() {
    this._storage = LinkedList();
  }

  push(value) {
    this._storage.insertAtEnd(value);
  }

  pop() {
    return this._storage.pop();
  }

  peek() {
    return this._storage.end.value();
  }

  isEmpty() {
    if (this._storage.next === null) {
      console.log('This STACK is empty!');
      return null;
    }
    return null;
  }
}

module.exports = Stacks;
