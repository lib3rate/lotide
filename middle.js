// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
