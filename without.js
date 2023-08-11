const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const without = (source, itemsToRemove) => {
  let removedArray = []; // Create an empty array to store elements that are not in itemsToRemove
  for (let elm of source) {
    // Loop through each element (elm) in the source array
    if (!itemsToRemove.includes(elm)) {
      // Check if the current element (elm) is NOT included in itemsToRemove
      removedArray.push(elm); // If the element is not in itemsToRemove, push it to removedArray
    }
  }
  return removedArray; // Return the array containing elements that were not removed
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
