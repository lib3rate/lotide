const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// console.log(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// console.log(middle(["1", "2", "3", "4"]));
assertArraysEqual(middle(["1", "2", "3", "4"]), ["2", "3"]);

const words = ["hello", "world", "lighthouse"];
// console.log(middle(words));
assertArraysEqual(middle(words), ["world"]);