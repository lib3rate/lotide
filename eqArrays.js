const eqArrays = function(firstArray, secondArray) {
  let comparison = false;
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        comparison = true;
      } else {
        return false;
      }
    }
  }
  return comparison;
};

module.exports = eqArrays;