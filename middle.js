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
    }
  }
  if (comparison === true) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  };
};

// ACTUAL FUNCTION
const middle = function(array) {
  let middleElements = [];
  if (array.length <= 2) {
    return middleElements;
  } else if (array.length % 2 === 1) {
    middleElements.push(array[(array.length - 1) / 2]); 
  } else {
    let middleOne = array[(array.length - 2) / 2];
    let middleTwo = array[array.length / 2];
    middleElements.push(middleOne, middleTwo); 
  }
  return middleElements;
}

// TEST CODE
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

console.log(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log(middle(["1", "2", "3", "4"]));
assertArraysEqual(middle(["1", "2", "3", "4"]), ["2", "3"]);

const words = ["hello", "world", "lighthouse"];
console.log(middle(words));
assertArraysEqual(middle(words), ["world"]);
