const assertEqual = require("./assertEqual");

const head = function (actual, expected) {
  return actual[0] || expected; //  I simply added the 0 index in the actual array
};

module.exports = head;
