// const eqObjects = require('../eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let comparison = true;
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    comparison = false;
  } else {
    for (let key of Object.keys(actual)) {
      if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
        if (actual[key].length !== expected[key].length) {
          comparison = false;
        } else {
          for (let i = 0; i < actual[key].length; i++) {
            if (actual[key][i] !== expected[key][i]) {
              comparison = false;
            }
          } 
        }
      } else {
        if (actual[key] !== expected[key]) {
          comparison = false;
        }
      }
    }
  };
  if (comparison === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  };
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const objectOne = { a: "1", b: "2", d: "3", c: "4" };
const objectTwo = { b: "2", a: "1", c: "3", d: "4" };
assertObjectsEqual(objectOne, objectTwo); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

module.exports = assertObjectsEqual;