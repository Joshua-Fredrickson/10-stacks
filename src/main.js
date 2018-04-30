'use strict';

const Stacks = require('./lib/stacks');

const stackOne = new Stacks();

stackOne.peek();
stackOne.push(99);
stackOne.push(34);
stackOne.push(24);
stackOne.pop();
stackOne.peek();
