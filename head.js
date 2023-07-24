const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const head = function (actual, expected) {
  return actual[0] || expected; //  I simply added the 0 index in the actual array
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
