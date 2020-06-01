const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
// assertEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
// assertEqual(ab, abc);

const objectOne = { a: "1", b: "2", d: "3", c: "4" };
const objectTwo = { b: "2", a: "1", c: "3", d: "4" };
console.log(eqObjects(objectOne, objectTwo)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
console.log(eqObjects(cd, dc));
// assertEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
console.log(eqObjects(cd, cd2));
// assertEqual(cd, cd2);

describe("#eqObjects", () => {
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