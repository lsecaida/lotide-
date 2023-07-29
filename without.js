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

const without = (source, itemsToRemove) => {
  let removedArray = [];
  for (let elm of source) {
    if (!itemsToRemove.includes(elm)) {
      removedArray.push(elm);
    }
  }
  return removedArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
