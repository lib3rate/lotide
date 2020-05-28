const eqArrays = function(firstArray, secondArray) {
  let comparison = false;
  if (firstArray.length !== secondArray.length) {
    return false;
  };
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      comparison = true;
    } else {
      return false;
    }
  }
  return comparison;
};

const assertArraysEqual = function(firstArray, secondArray) {
  let comparison = false;
  if (firstArray.length !== secondArray.length) {
    comparison = false;
  };
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      comparison = true;
    } else {
      comparison = false;
      break;
    }
  }
  if (comparison === true) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  };
};

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false