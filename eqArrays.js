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

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
assertEqual(eqArrays([1, "", 3], [1, 2, 3]), true);
assertEqual(eqArrays(["a"], ["a"]), true);

// const eqArrays = function (actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     return `${JSON.stringify(actual)}, ${JSON.stringify(expected)}`;
//   } else JSON.stringify(actual) !== JSON.stringify(expected);

//   return `${JSON.stringify(actual)}, ${JSON.stringify(expected)}`;
// };

// // assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]));
