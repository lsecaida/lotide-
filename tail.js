// AssertEqual function

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      `\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`
    ); // Used the Unicode representation for the green check
  } else {
    console.log(
      `\u274C \u274C \u274C Assertion Failed: ${actual} !== ${expected}`
    ); // Used the Unicode representation for the red x
  }
};

const tail = function (words) {
  if (words.length < 2) {
    return words;
  } else {
    return words.slice(1);
  }
};

const words = ["Leonardo", "Raphael", "Michaelangelo"];
tail(words);

assertEqual(words.length, 3);

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
