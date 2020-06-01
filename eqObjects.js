const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object1[key])) {
        if (object1[key].length !== object2[key].length) {
          return false;
        } else {
          for (let i = 0; i < object1[key].length; i++) {
            if (object1[key][i] !== object2[key][i]) {
              return false;
            }
          } 
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  return true;
  };
};

module.exports = eqObjects;