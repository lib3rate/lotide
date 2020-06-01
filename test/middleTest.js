const assert = require('chai').assert;
const middle = require('../middle');

describe("#tail", () => {
  it(`returns [] for [1]`, () => {
    assert.deepEqual(middle([1]), []);
  });

  it(`returns [] for [1, 2]`, () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it(`returns [3] for [1, 2, 3, 4, 5]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it(`returns ["2", "3"] for ["1", "2", "3", "4"]`, () => {
    assert.deepEqual(middle(["1", "2", "3", "4"]), ["2", "3"]);
  });

  it(`returns ["world"] for ["hello", "world", "lighthouse"]`, () => {
    assert.deepEqual(middle(["hello", "world", "lighthouse"]), ["world"]);
  });
});