const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const takeUntil = function (array, callback) {
  const results = []; //an empty array where the values will be after the callback function
  for (const element of array) {
    //it goes through the elements in the array
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

module.exports = takeUntil;
