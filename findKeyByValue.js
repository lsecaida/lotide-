const assertEqual = require("./assertEqual");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const findKeyByValue = function (object, value) {
  const objectKeys = Object.keys(object);

  for (let key of objectKeys) {
    // it goes through  the keys in the given object
    console.log(key);
    if (object[key] === value) {
      // checking if values match with the given input values
      return key;
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
