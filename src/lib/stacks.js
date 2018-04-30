'use strict'

const LinkedList = require('./linked-list');

module.exports = Stacks;

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
    return this._storage.end();
  }
}
