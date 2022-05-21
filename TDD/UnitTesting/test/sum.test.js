// Jest????

const { expect } = require('process');
const sum = require('../sum.js');

test('It should add two numbers correctly.', () => {
  expect(sum(2, 7)).toBe(9);
});