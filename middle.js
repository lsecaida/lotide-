const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1}  === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1}  !== ${array2}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const middle = (array) => {
  if (array.length <= 2) {
    array = [];
    console.log(array);
    return array;
  }
  if (array.length % 2 !== 0) {
    let chop = array.length / 2 + 0.5;
    console.log(array[chop - 1]);
    return array[chop - 1];
  }

  if (array.length % 2 === 0) {
    let emptyArr = [];
    let chop = array.length / 2;
    console.log(array[chop - 1], array[chop]);
    emptyArr.push(array[chop - 1], array[chop]);
    return emptyArr;
  }
};

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
