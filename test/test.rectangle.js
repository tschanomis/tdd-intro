const assert = require('assert');
const Rectangle = require('../rectangle.js');
const square = new Rectangle(2,2);

describe('square', () => {
  it('return true if square', () => {
    assert.strictEqual(square.isSquare(), true);
  });
  it('return false if not square', () => {
    assert.strictEqual((square.a !== square.b), false);
  });
  it('return area', () => {
    assert.strictEqual((square.getArea()), 4);
  });
  it('return perimeter', () => {
    assert.strictEqual((square.getPerimeter()), 8);
  });
});