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

//Why isn't "without" function working with no "flag"?

const without = function(source, itemsToRemove) {
  let removedItems = [];
  for (let i = 0; i < source.length; i++) {
    let flag = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        flag = true;
      }
    }
    if (!flag) {
      removedItems.push(source[i]);
    }
  }
  console.log(removedItems);
};

without([1, 2, 3], [1]) // => [2, 3]
assertArraysEqual([1, 2, 3], [1]);

without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual(["1", "2", "3"], [1, 2, "3"]);

without(["1", "2", "3"], [1, 2, "3"])
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);