'use strict';

const Stacks = require('../lib/stacks');

describe('stacks.js', () => {
  test('#constructor', () => {
    const testStack = new Stacks();
    expect(testStack).toBeNull();

    test('#isEmpty', () => {
      const testStack1 = new Stacks();
      expect(testStack1.isEmpty).toBeNull();
    });
  });
  test('#push', () => {
    const testStack = new Stacks();
    testStack.push(5);
    expect(testStack.push).toEqual(5);
  });

  test('#pop', () => {
    const testStack = new Stacks();
    testStack.push(5);
    testStack.push(10);
    expect(testStack.pop).toEqual(5);
  });

  test('#peek', () => {
    const testStack = new Stacks();
    testStack.push(5);
    testStack.push(10);
    expect(testStack.peek).toEqual(10);
  });
});
