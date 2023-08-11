const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const letterPositions = function (sentence) {
  const results = {}; //Contains the letters in the sentence as keys with the array values
  for (let i = 0; i < sentence.length; i++) {
    //it goes trough  the letters in the sentence
    if (sentence[i] === " ") {
      // it bypasses an empty space
      continue;
    } else if (results[sentence[i]]) {
      //check for duplicate letters
      results[sentence[i]].push(i); //it adds the duplicate letters
    } else {
      results[sentence[i]] = [i]; //gets the key value in the array with the index
    }
  }
  return results;
};

module.exports = letterPositions;
// console.log(letterPositions("Lighthouse in the house"));
