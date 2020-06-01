const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  let comparison = false;
  if (firstArray.length !== secondArray.length) {
    comparison = false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        comparison = true;
      } else {
        comparison = false;
        break;
      }
    }
  }
  if (comparison === true) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  };
};

module.exports = assertArraysEqual;