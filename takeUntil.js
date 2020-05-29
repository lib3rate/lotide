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

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    // console.log(`${item} is ${callback(item)}`);
    if(!callback(item)) {
      result.push(item);
    } else {
      break;
    };
  };
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]) // => true

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']); // => true

const data3 = [3, 2, 5, 7, 1, -1, 2, 4, 5];
const results3 = takeUntil(data3, x => x < 1);
// console.log(results3);
assertArraysEqual(results3, [3, 2, 5, 7, 1]) // => true
assertArraysEqual(results3, [3, 2, 5, 7, 1, -1]) // => false