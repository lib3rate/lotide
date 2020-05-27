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

const letterPositions = function(string) {
  const results = {};
  // logic to update results here
  let stringArray = string.split("");
  for (let i = 0; i < stringArray.length; i++) {
    let letter = stringArray[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
letterPositions("lighthouse in the house");

// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }