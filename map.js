const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  //an array and a callback function
  const results = []; // items listed after the callback function
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1); //the results of the array after the callback function was invoked

module.exports = map;
