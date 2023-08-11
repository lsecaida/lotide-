const assertEqual = require("./assertEqual");

// Implement the function findKey which takes in an object and a callback.
//  It should scan the object and return the first key for which the
// callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = (object, callback) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    //It goes through the keys in the object
    if (callback(object[key])) return key; //checks if the value at the key returns true through the callback function
  }
  return undefined; //returns the key
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
); // => "noma"

module.exports = findKey;
