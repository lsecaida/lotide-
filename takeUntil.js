// eqArrays function
const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    //First compare the length
    return false; // Not the same length then false
  } else {
    // If they are the same length
    for (let i = 0; i < arrayOne.length; i++) {
      /* Loop through arrays, and since they are def the same length now, there is no error */
      if (arrayOne[i] !== arrayTwo[i]) {
        /* Check if the arrays contain the same contents */
        return false;
      }
    }
    return true; // If all of this is a no, then true!
  }
};

// assertArraysEqual function
const assertArraysEqual = function (arrayOne, arrayTwo) {
  // Take in two arrays
  const result = eqArrays(arrayOne, arrayTwo); // Calls on function to compare
  if (result === true) {
    // If results are true
    console.log(
      `\u2705 \u2705 \u2705 Assertion Passed: ${arrayOne} === ${arrayTwo}`
    ); // Used the Unicode representation for the green check
  } else {
    // If results are false
    console.log(
      `\u274C \u274C \u274C Assertion Failed: ${arrayOne} !== ${arrayTwo}`
    ); // Used the Unicode representation for the red x
  }
};

const takeUntil = function (array, callback) {
  const results = [];
  for (const element of array) {
    if (callback(element)) {
      return results;
    }
    results.push(element);
  }
  return results;
};
// Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
