const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  };
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (object1[key].length !== object2[key].length) {
        return false;
      };
      for (let i = 0; i < object1[key].length; i++) {
        // let comparison = false;
        // if (object1[key][i] === object2[key][i]) {
        //   comparison = true;
        // } else {
        //   comparison = false;
        //   break;
        // }
        if (object1[key][i] !== object2[key][i]) {
          return false;
        }
      }
    };
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

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

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
console.log(eqObjects(cd, cd2));